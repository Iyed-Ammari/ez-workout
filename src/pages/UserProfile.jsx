import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const handleSubmit = () => {
  // TODO: submit form
};

const UserProfile = () => {
  const [username, setUsername] = useState("nmaxwell");
  const [userEmail, setUserEmail] = useState("nmaxwell@mail.com");
  const [confirmEmail, setConfirmEmail] = useState(false);
  const [userCompany, setUserCompany] = useState("Company Ltd.");
  const [newPhoto, setNewPhoto] = useState(null);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError(false);
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
    setEmailError(false);
  };

  const handleCompanyChange = (e) => {
    setUserCompany(e.target.value);
  };

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewPhoto(e.target.files[0]);
    }
  };

  const handleConfirmEmail = () => {
    setConfirmEmail(true);
  };

  const validateForm = () => {
    if (username.length < 3) {
      setUsernameError(true);
    }

    if (!userEmail.includes("@")) {
      setEmailError(true);
    }

    return username.length >= 3 && userEmail.includes("@");
  };

  return (
    <Container component="main">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Account Settings
        </Typography>
        <Box>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="dense" variant="standard">
              <InputLabel htmlFor="profilePicture">Profile Picture</InputLabel>
              <Input
                id="profilePicture"
                type="file"
                onChange={(e) => {
                  // Handle the file upload here
                }}
              />
            </FormControl>
            <FormControl fullWidth margin="dense" variant="standard" required>
              <InputLabel htmlFor="firstName">First Name</InputLabel>
              <Input id="firstName" required type="text" onChange={(e) => {}} />
            </FormControl>
            <FormControl fullWidth margin="dense" variant="standard" required>
              <InputLabel htmlFor="lastName">Last Name</InputLabel>
              <Input id="lastName" required type="text" onChange={(e) => {}} />
            </FormControl>
            <FormControl fullWidth margin="dense" variant="standard" required>
              <InputLabel htmlFor="age">Age</InputLabel>
              <Input id="age" required type="number" onChange={(e) => {}} />
            </FormControl>
            <FormControl fullWidth margin="dense" variant="standard" required>
              <InputLabel htmlFor="email">E-mail</InputLabel>
              <Input id="email" required type="email" onChange={(e) => {}} />
            </FormControl>
            <FormControl fullWidth margin="dense" variant="standard" required>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                required
                type="password"
                onChange={(e) => {}}
              />
            </FormControl>
            <FormControl fullWidth margin="dense" variant="standard" required>
              <InputLabel htmlFor="confirmPassword">
                Confirm Password
              </InputLabel>
              <Input
                id="confirmPassword"
                required
                type="password"
                onChange={(e) => {}}
              />
            </FormControl>
            <Stack direction={'row'} gap={'20px'} mt={'10px'}>
            <Button variant='contained'
            color='error' sx={{
              backgroundColor: '#FF2625',
              padding: '10px'
            }} type="Submit">
              Save
            </Button>
            <Button variant='contained'
            color='error' sx={{
              backgroundColor: '#FF2625',
              padding: '10px'
            }}>Cancel</Button>
            </Stack>
            
            
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default UserProfile;
