import React, { useEffect, useState } from "react";
import { users } from "../data/dummyData";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import emailjs from "@emailjs/browser";
import Loader from "../components/Loader";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

const AdminDashboard = () => {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  // const [rows, setRows] = useState(
    
  // )
  const rows = users.map((user) => {
    const localStoredUser = localStorage.getItem(
      `user ${user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)}`
    );
    if (localStoredUser) {
      const token = JSON.parse(localStoredUser);
      user = token;
    } else {
      localStorage.setItem(
        "user " +
          user.firstName.charAt(0).toUpperCase() +
          user.firstName.slice(1),
        JSON.stringify(user)
      );
    }

    return user;
  })
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [type, setType] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const handleEdit = () => {
    // console.log(selectedIds);
    if (selectedRows.length === 0) {
      setMessage("Please select a user to edit");
      setOpenSnackbar(true);
    } else if (selectedRows.length > 1) {
      setMessage("Please select only one user to edit");
      setOpenSnackbar(true);
    } else {
      setOpenDialog(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  useEffect(() => {
    console.log(selectedRows);
  }, [selectedRows]);

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleClick = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const [isVisible, setIsVisible] = React.useState({});
  const toggleVisibility = (id) => {
    setIsVisible((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Initialize status state with users' status

  const [status, setStatus] = useState({});
  useEffect(() => {
    setStatus(
      users.reduce((acc, user) => ({ ...acc, [user.id]: user.status }), {})
    );
  }, [users]);

  const findEmail = (id) => {
    const user = users.find((user) => user.id === id);
    return user ? user.email : console.log("User not found from findEmail");
  };

  const findUser = (id) => {
    const user = users.find((user) => user.id === id);
    return user
      ? user.firstName.charAt(0).toUpperCase() +
          user.firstName.slice(1) +
          " " +
          user.lastName.charAt(0).toUpperCase() +
          user.lastName.slice(1)
      : console.log("User not found from findUser");
  };
  // Function to toggle status
  const toggleStatus = (id) => {
    setStatus((prev) => ({
      ...prev,
      [id]: prev[id] === "active" ? "inactive" : "active",
    }));

    const serviceId = "service_imz8xwe";
    const templateId = "template_vbcwtm5";
    const publicKey = "LbtJIMcrSAqyIN7dV";

    const templateParams = {
      to_email: findEmail(id),
      to_name: findUser(id),
      message: `Your account status has been changed to ${
        status[id] === "active" ? "inactive" : "active"
      }`,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        if (findUser(id)) {
          console.log("SUCCESS!", response);
          setMessage(
            status[id] === "active"
              ? "Account is deactivated successfully"
              : "Account is activated successfully"
          );
          handleClick();
        } else {
          throw new Error("User not found");
        }
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setMessage("Failed to send email");
        handleClick();
      });
    const user = users.find((user) => user.id === id);
    const token = {
      ...user,
      status: status[id] === "active" ? "inactive" : "active",
    };
    localStorage.setItem(
      "user " + findUser(id).substring(0, findUser(id).indexOf(" ")),
      JSON.stringify(token)
    );
  };

  // Update checkedStatus function to use status state
  const checkedStatus = (value) => {
    return value === "active";
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
      width: 200,
      renderCell: (params) => {
        console.log(params.row); 
    
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "200px",
            }}
          >
            <Typography variant="body2">
              {params.row.status === "active" ? "Active" : "Inactive"}
            </Typography>
            <Switch
              checked={checkedStatus(params.row.status)}
              onChange={() => toggleStatus(params.id)}
            />
          </Box>
        );
      },
    },
  ];

  return loading ? (
    <Loader loading={loading} />
  ) : (
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
        <Link to="/home">
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
        disableRowSelectionOnClick
        pageSizeOptions={[5]}
        checkboxSelection
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
        onRowSelectionModelChange={(newSelection) => {
          
          // console.log(newSelection);
          
          const selectedRowsData = rows.filter((row) =>
          newSelection.includes(row.id)
        );
        setSelectedRows(selectedRowsData);
          // console.log(selectedRowsData);
          
        }}
      />
      <Box mt={"10px"} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Fab
          color="error"
          aria-label="add"
          sx={{ margin: "5px", color: "white", backgroundColor: "#FF2625" }}
          onClick={handleEdit}
        >
          <EditIcon />
        </Fab>
      </Box>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the data you want to edit :
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="dense" variant="standard" required>
              <InputLabel htmlFor="id">ID</InputLabel>
              <Input id="id" required type="number" defaultValue={selectedRows.length === 1 ? selectedRows[0].id : null}
              onChange={(e) => setId(e.target.value)}/>
            </FormControl>
            <FormControl fullWidth margin="dense" variant="standard" required>
              <InputLabel htmlFor="firstName" >First Name</InputLabel>
              <Input id="firstName" required type="text" defaultValue={selectedRows.length === 1 ? selectedRows[0].firstName : null}
              onChange={(e) => setFirstName(e.target.value)}/>
            </FormControl>
            <FormControl fullWidth margin="dense" variant="standard" required>
              <InputLabel htmlFor="lastName" >Last Name</InputLabel>
              <Input id="lastName" required type="text" defaultValue={selectedRows.length === 1 ? selectedRows[0].lastName : null}
              onChange={(e) => setLastName(e.target.value)}/>
            </FormControl>
            <FormControl fullWidth margin="dense" variant="standard" required>
              <InputLabel htmlFor="age">Age</InputLabel>
              <Input
                id="age"
                required
                type="number"
                inputProps={{ min: 18, max: 100 }}
                defaultValue={selectedRows.length === 1 ? selectedRows[0].age : null}
                onChange={(e) => setAge(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth margin="dense" variant="standard" required>
              <InputLabel htmlFor="pw">Password</InputLabel>
              <Input id="pw" required type="password" defaultValue={selectedRows.length === 1 ? selectedRows[0].pw : null} 
              onChange={(e) => setPassword(e.target.value)}/>
            </FormControl>
            <FormControl fullWidth margin="dense" variant="standard" required>
              <InputLabel htmlFor="email" >Email</InputLabel>
              <Input id="email" required type="email" defaultValue={selectedRows.length === 1 ? selectedRows[0].email : null}
              onChange={(e) => setEmail(e.target.value)}/>
            </FormControl>
            <FormControl
              component="fieldset"
              fullWidth
              margin="dense"
              variant="standard"
              required
            >
              <FormLabel component="legend">Is Admin?</FormLabel>
              <RadioGroup
                aria-label="isAdmin"
                name="isAdmin"
                row
                defaultValue={selectedRows.length === 1 && (selectedRows[0].type)==='admin' ? 'yes' : 'no'}
                onChange={(e) => setType(e.target.value)}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <FormControl
              component="fieldset"
              fullWidth
              margin="dense"
              variant="standard"
              required
              
            >
              <FormLabel component="legend">Status</FormLabel>
              <RadioGroup
                aria-label="status"
                name="status"
                row
                defaultValue={selectedRows.length === 1 && (selectedRows[0].status)==='active' ? 'active' : 'inactive'}
                onChange={(e) => setFormStatus(e.target.value)}
              >
                <FormControlLabel value="active" control={<Radio />} label="Active" />
                <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
              </RadioGroup>
            </FormControl>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              <Button type="submit">Modify</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={message}
        action={action}
      />
    </Box>
  );
};

export default AdminDashboard;
