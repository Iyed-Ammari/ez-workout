import React from "react";
import { users } from "../data/dummyData";
import Box from "@mui/material/Box";
import { DataGrid} from "@mui/x-data-grid";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";



const AdminDashboard = () => {
  const cols = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "firstName", headerName: "Firstname", width: 150, renderCell: (params) => {return params.value.charAt(0).toUpperCase() + params.value.slice(1)}},
    { field: "lastName", headerName: "Lastname", width: 150, renderCell: (params) => {return params.value.charAt(0).toUpperCase() + params.value.slice(1)} },
    { field: "age", headerName: "Age", width: 2 },
    { field: "pw", headerName: "Password", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "type",
      headerName: "Is Admin?",
      renderCell: (params) => {
        return params.value === "admin" ?<Box sx={{display: 'flex', justifyContent:'center', alignItems:'center', height: '100%', width: '100%'}}><DoneIcon color="success" /></Box> : <Box sx={{display: 'flex', justifyContent:'center', alignItems:'center', height: '100%', width: '100%'}}><CloseIcon color="error" /></Box>;
      },
    },
  ];
  const rows = users.map((user) => {
    return {
      ...user,
      pw: "*".repeat(user.pw.length),
    };
  });
  return (
    <Box
      sx={{
        m: "20px"
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
      />
    </Box>
  );
};

export default AdminDashboard;
