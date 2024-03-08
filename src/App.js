import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";
import Forgot from "./pages/Forgot";
import ResetForm from "./pages/ResetForm";

const App = () => {
  return (
    <Box width={"400px"} sx={{ width: { xl: "1488px" } }} m={"auto"}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpw" element={<Forgot />} />
        <Route path="/resetpw" element={<ResetForm />} />
      </Routes>
      
    </Box>
  );
};

export default App;
