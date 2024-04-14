import React, { useEffect } from "react";
import Loader from "../components/Loader";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
} from "@mui/material";
import Logo from "../assets/images/Logo.png";
import { DataGrid } from "@mui/x-data-grid";
import exercisesData from "../data/dummyData";
import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  bodyPartList,
  equipments,
  targets,
  secondaryMuscles,
} from "../data/dummyData";
import Typography from "@mui/material/Typography";

const ExercisesManagment = () => {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  const [selectedBodyPart, setSelectedBodyPart] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [selectedTarget, setSelectedTarget] = useState("");

  const [openDialog, setOpenDialog] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const [message, setMessage] = React.useState("");

  const [selectedIds, setSelectedIds] = useState([]);

  const [formState, setFormState] = useState({
    id: "",
    bodyPart: "",
    equipment: "",
    gifUrl: "",
    target: "",
    secondaryMuscles: [],
  });

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    // Here you can handle the form submission, e.g. send the data to a server
  };
  const [selectedMuscles, setSelectedMuscles] = useState([]);
  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setSelectedMuscles([...selectedMuscles, event.target.name]);
    } else {
      setSelectedMuscles(
        selectedMuscles.filter((muscle) => muscle !== event.target.name)
      );
    }
  };
  useEffect(() => {
    setFormState({ ...formState, secondaryMuscles: selectedMuscles });
  }, [selectedMuscles]);
  useEffect(() => {
    console.log(formState);
  }, [formState]);

  
  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
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
  const changeKey = (oldKey, newKey) => {
    const value = localStorage.getItem(oldKey);
    localStorage.setItem(newKey, value);
    localStorage.removeItem(oldKey);
  };

  const handleDelete = () => {
    console.log(selectedIds);
    if (selectedIds.length === 0) {
      setMessage("Please select an exercise to delete");
    } else {
      selectedIds.forEach((id) => {
        const oldKey = `exercise-${id}`;
        const newKey = `deletedExercise-${id}`;
        changeKey(oldKey, newKey);
      });
      setMessage(
        selectedIds.length === 1
          ? "Exercise deleted successfully"
          : "Exercises deleted successfully"
      );
    }
    setOpenSnackbar(true);
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

  const rows = exercisesData
    .map((exercise) => {
      const localStoredExercise = localStorage.getItem(
        `exercise-${exercise.id}`
      );
      if (localStoredExercise) {
        const token = JSON.parse(localStoredExercise);
        exercise = token;
      } else {
        const deletedExercise = localStorage.getItem(
          `deletedExercise-${exercise.id}`
        );
        if (deletedExercise) {
          exercise = null;
        } else {
          localStorage.setItem(
            `exercise-${exercise.id}`,
            JSON.stringify(exercise)
          );
        }
      }
      return exercise;
    })
    .filter((exercise) => exercise !== null);
  return loading ? (
    <Loader loading={loading} />
  ) : (
    <>
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
        <Box mt={"10px"} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Fab
            color="primary"
            aria-label="add"
            onClick={handleClickOpenDialog}
            sx={{ margin: "5px" }}
          >
            <AddIcon />
          </Fab>
          <Fab
            color="primary"
            aria-label="add"
            onClick={handleDelete}
            sx={{ margin: "5px" }}
          >
            <DeleteIcon />
          </Fab>
        </Box>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={message}
        action={action}
      />

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add an exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add an exercise, please enter the exercise's ID, body part,
            equipment, gif URL, name, target and secondary muscles.
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="dense" variant="standard" required>
              <InputLabel htmlFor="id">ID</InputLabel>
              <Input
                id="id"
                required
                type="number"
                value={formState.id}
                onChange={(e) => {
                  e.target.name = "id";
                  handleChange(e);
                }}
              />
            </FormControl>
            <FormControl fullWidth margin="dense" variant="standard" required>
              <InputLabel htmlFor="bodyPart">Body Part</InputLabel>
              <Select
                id="bodyPart"
                value={selectedBodyPart || ""}
                onChange={(e) => {
                  setSelectedBodyPart(e.target.value);
                  e.target.name = "bodyPart";
                  handleChange(e);
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {bodyPartList.map((bodyPart, index) => (
                  <MenuItem value={bodyPart} key={index}>
                    {bodyPart}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="dense" variant="standard" required>
              <InputLabel htmlFor="equipment">Equipment</InputLabel>
              <Select
                id="equipment"
                value={selectedEquipment || ""}
                onChange={(e) => {
                  setSelectedEquipment(e.target.value);
                  e.target.name = "equipment";
                  handleChange(e);
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {equipments.map((equipment, index) => (
                  <MenuItem value={equipment} key={index}>
                    {equipment}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth margin="dense" variant="standard" required>
              <InputLabel htmlFor="target">Target</InputLabel>
              <Select
                id="target"
                value={selectedTarget || ""}
                onChange={(e) => {
                  setSelectedTarget(e.target.value);
                  e.target.name = "target";
                  handleChange(e);
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {targets.map((target, index) => (
                  <MenuItem value={target} key={index}>
                    {target}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <fieldset>
              <Typography
                variant="h6"
                component="legend"
                sx={{ margin: "0 20px " }}
              >
                Secondary Muscles
              </Typography>
              <FormControl
                fullWidth
                margin="dense"
                variant="standard"
                required
                sx={{ marginLeft: "5px", display: "flex", flexWrap: "wrap" }}
              >
                {secondaryMuscles.map((muscle, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        id={`cb${index}`}
                        name={muscle}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label={muscle}
                  />
                ))}
              </FormControl>
            </fieldset>
            <FormControl fullWidth margin="dense" variant="standard" required>
              <InputLabel htmlFor="image">GIF</InputLabel>
              <Input
                type="file"
                id="image"
                onChange={(e) => {
                  e.target.name = "gifUrl";
                  handleChange(e);
                }}
              />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ExercisesManagment;
