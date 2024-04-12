import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";
import Forgot from "./pages/Forgot";
import ResetForm from "./pages/ResetForm";
import { users } from "./data/dummyData";
import AdminDashboard from "./pages/AdminDashboard";
import ExercisesManagment from "./pages/ExercisesManagment";

const App = () => {
  
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setUserType(storedUserType);
    } else {
      setUserType('user');
    }
    
  }, []); 
  

  return (
    <Box width={"400px"} sx={{ width: { xl: "1488px" } }} m={"auto"}>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn userType={userType} setUserType={setUserType}/>} />
        <Route path="/forgotpw" element={<Forgot />} />
        <Route path="/resetpw" element={<ResetForm />} />
        <Route path="/home" element={<Home  userType={userType} setUserType={setUserType} />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/exercisesmanagment" element={<ExercisesManagment/>}/>
      </Routes>
      
    </Box>
  );
};

export default App;
