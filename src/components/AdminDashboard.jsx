import React from "react";
import { users } from "../data/dummyData";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";

const AdminDashboard = () => {
  const [isVisible, setIsVisible] = React.useState({});
  const toggleVisibility = (id) => {
    setIsVisible((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const cols = [
    { field: "id", headerName: "ID", width: 90, headerClassName: "red-header", },
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
            {isVisible[params.id] ? params.value : "*".repeat(params.value.length)}
            
          </span>
          <Button
            onClick={() => {toggleVisibility(params.id);console.log(params)}}
            startIcon={isVisible[params.id] ? <VisibilityIcon sx={{ml: '30%'}} /> : <VisibilityOffIcon sx={{ml: '30%'}}/>}
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
  ];
  const rows = users;
  return (
    <Box
      sx={{
        m: "20px",
      }}
    >
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
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
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
