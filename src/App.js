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
import AdminDashboard from "./pages/AdminDashboard";
import ExercisesManagment from "./pages/ExercisesManagment";
import UnderConstruction from "./pages/UnderConstruction";
import { Navigate } from 'react-router-dom';
const App = () => {
  
  const [userType, setUserType] = useState('');
  const [siteAccessible, setSiteAccessible] = useState(true);
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
        <Route path="/" element={siteAccessible ? <SignUp /> : <Navigate to="/uc" />} />
        <Route path="/signin" element={siteAccessible ?<SignIn userType={userType} setUserType={setUserType}/> : <Navigate to="/uc" />} />
        <Route path="/forgotpw" element={siteAccessible ?<Forgot /> : <Navigate to="/uc" />} />
        <Route path="/resetpw" element={siteAccessible ?<ResetForm /> : <Navigate to="/uc" />} />
        <Route path="/home" element={siteAccessible ?<Home setSiteAccessible={setSiteAccessible} /> : <Navigate to="/uc" />} />
        <Route path="/exercise/:id" element={siteAccessible ?<ExerciseDetail /> : <Navigate to="/uc" />} />
        <Route path="/dashboard" element={siteAccessible ?<AdminDashboard /> : <Navigate to="/uc" />} />
        <Route path="/exercisesmanagment" element={siteAccessible ?<ExercisesManagment/> : <Navigate to="/uc" />}/>
        <Route path="/uc" element={<UnderConstruction />} />
        
      </Routes>
      
    </Box>
  );
};

export default App;
