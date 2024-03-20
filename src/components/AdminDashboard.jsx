import React, { useEffect, useState } from "react";
import { users } from "../data/dummyData";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";
import {  Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import emailjs from "@emailjs/browser";
import Loader from "./Loader";

const AdminDashboard = () => {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, []);
 
  
  const [isVisible, setIsVisible] = React.useState({});
  const toggleVisibility = (id) => {
    setIsVisible((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  

  // Initialize status state with users' status
  
  const [status, setStatus] = useState({});
  useEffect(() => {
    setStatus(users.reduce((acc, user) => ({ ...acc, [user.id]: user.status }), {}));
  }, [users]);
  console.log(status);


  const findEmail = (id) => {
    const user = users.find((user) => user.id === id);
    return user ? user.email : console.log("User not found from findEmail");
  };

  const findUser = (id) => {
    const user = users.find((user) => user.id === id);
    return user ? user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1) + " " + user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1) : console.log("User not found from findUser");
  };
  // Function to toggle status
  const toggleStatus = (id) => {
    setStatus((prev) => ({
      ...prev,
      [id]: prev[id] === 'active' ? 'inactive' : 'active',
    }));

    const serviceId = "service_imz8xwe";
    const templateId = "template_vbcwtm5";
    const publicKey = "YKRjManmoxadNNvE0";

    const templateParams = {
      
      to_email: findEmail(id),
      to_name: findUser(id),
      message: `Your account status has been changed to ${status[id] === 'active' ? 'inactive' : 'active'}`,
    };  

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        if(findUser(id))
        {console.log("SUCCESS!", response);
        alert("Report sent successfully");}
        else {
          throw new Error("User not found");
        }
      })
      .catch((error) => {
        console.log("FAILED...", error);
        alert("Report failed to send")
      });
      const token = {id: id, email: findEmail(id), status: status[id] === 'active' ? 'inactive' : 'active'}
      localStorage.setItem('user '+findUser(id).substring(0, findUser(id).indexOf(' ')), JSON.stringify(token)          );
  };

  // Update checkedStatus function to use status state
  const checkedStatus = (id) => {
    return status[id] === 'active';
  };


  const cols = [
    { field: "id", headerName: "ID", width: 90, headerClassName: "red-header" },
    {
      field: "firstName",
      headerName: "Firstname",
      width: 150,
      renderCell: (params) => {
        return params.value.charAt(0).toUpperCase() + params.value.slice(1);
      },
      headerClassName: "red-header",
    },
    {
      field: "lastName",
      headerName: "Lastname",
      width: 150,
      renderCell: (params) => {
        return params.value.charAt(0).toUpperCase() + params.value.slice(1);
      },
      headerClassName: "red-header",
    },
    {
      field: "age",
      headerName: "Age",
      width: 2,
      headerClassName: "red-header",
    },
    {
      field: "pw",
      headerName: "Password",
      width: 150,
      headerClassName: "red-header",
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
            }}
          >
            {isVisible[params.id]
              ? params.value
              : "*".repeat(params.value.length)}
          </span>
          <Button
            onClick={() => {
              toggleVisibility(params.id);
              console.log(params);
            }}
            startIcon={
              isVisible[params.id] ? (
                <VisibilityIcon sx={{ ml: "30%" }} />
              ) : (
                <VisibilityOffIcon sx={{ ml: "30%" }} />
              )
            }
            color="error"
          ></Button>
        </Box>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      headerClassName: "red-header",
    },
    {
      field: "type",
      headerName: "Is Admin?",
      renderCell: (params) => {
        return params.value === "admin" ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <DoneIcon color="success" />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <CloseIcon color="error" />
          </Box>
        );
      },
      headerClassName: "red-header",
    },
    {
      field: "status",
      headerName: "Status",
      headerClassName: "red-header",
      renderCell: (params) => (
        <Box>
          {status[params.id] === 'active' ? 'Active' : 'Inactive'}
          <Switch
            checked={checkedStatus(params.id)}
            onChange={() => toggleStatus(params.id)}
          />
        </Box>
      ),
    },
  ];
  const rows = users;
  return loading? <Loader loading={loading} /> : (
    <Box
      sx={{
        m: "20px",
      }}
    >
      <Stack
      direction={"row"}
      justifyContent={"space-around"}
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt: {
          sm: "32px",
          xs: "20px",
        },
        mb: {
          sm: "32px",
          xs: "20px",
        },
        justifyContent: "none",
      }}
      px={"20px"}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "48px",
            height: "48px",
            margin: "0 20px",
          }}
        />
      </Link>
      <Stack
        direction={"row"}
        gap={"40px"}
        fontSize={"24px"}
        alignItems={"flex-end"}
      >
        <Link
          to="/home"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        
        
          
        

      </Stack>
    </Stack>
      <DataGrid
        columns={cols}
        rows={rows}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: "error.light",
          "& .MuiDataGrid-row:hover": {
            color: "error.dark",
          },

          "& .red-header": {
            backgroundColor: "rgba(255, 38, 37, 0.5)",
          },
        }}
      />
    </Box>
  );
};

export default AdminDashboard;
