import React, { useEffect } from "react";
import Loader from "../components/Loader";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import { DataGrid } from "@mui/x-data-grid";
import exercisesData from "../data/dummyData";
import { useState } from "react";
import Button from '@mui/material/Button';



const ExercisesManagment = () => {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const [selectedIds, setSelectedIds] = useState([]);

  const changeKey = (oldKey, newKey) => {
    const value = localStorage.getItem(oldKey);
    localStorage.setItem(newKey, value);
    localStorage.removeItem(oldKey);
  };

  const handleDelete = () => {
    selectedIds.forEach((id) => {
      const oldKey = `exercise-${id}`;
      const newKey = `deletedExercise-${id}`;
      changeKey(oldKey, newKey);
      window.location.reload();
    });
  };

  

  const cols = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      headerClassName: "red-header",
      renderCell: (params) => {
        return params.value;
      },
    },
    {
      field: "bodyPart",
      headerName: "Body Part",
      width: 200,
      headerClassName: "red-header",
      renderCell: (params) => {
        return params.value;
      },
    },
    {
      field: "equipment",
      headerName: "Equipment",
      width: 200,
      headerClassName: "red-header",
      renderCell: (params) => {
        return params.value;
      },
    },
    {
      field: "gifUrl",
      headerName: "GIF",
      width: 200,
      headerClassName: "red-header",
      renderCell: (params) => {
        return (
          <img
            src={params.value}
            style={{ width: "100px", height: "100px" }}
            alt="gif"
          />
        );
      },
    },

    {
      field: "name",
      headerName: "Name",
      width: 200,
      headerClassName: "red-header",
      renderCell: (params) => {
        return params.value;
      },
    },
    {
      field: "target",
      headerName: "Target",
      width: 200,
      headerClassName: "red-header",
      renderCell: (params) => {
        return params.value;
      },
    },
    {
      field: "secondaryMuscles",
      headerName: "Secondary Muscles",
      width: 200,
      headerClassName: "red-header",
      renderCell: (params) => {
        return params.value;
      },
    },
  ];

  const rows = exercisesData.map((exercise) => {
    const localStoredExercise = localStorage.getItem(`exercise-${exercise.id}`);
    if (localStoredExercise) {
      const token = JSON.parse(localStoredExercise);
      exercise = token;
    } else {
        const deletedExercise = localStorage.getItem(`deletedExercise-${exercise.id}`);
        if(deletedExercise) {
            exercise = null;
            console.log("deleted exercise", deletedExercise);
        } else {
            localStorage.setItem(`exercise-${exercise.id}`, JSON.stringify(exercise));
            console.log("exercise", exercise);
        }
    }
    return exercise;
  }).filter(exercise => exercise !== null);
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
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
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
            setSelectedIds(newSelection);
        }}
      />
        <Button onClick={handleDelete}>Delete selected rows</Button>

    </Box>
  );
};

export default ExercisesManagment;
