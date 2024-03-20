import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HeroBannerImage from "../assets/images/banner.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { users } from "../data/dummyData";
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        EZ-Workout
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn({ setUserType }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("Account is inactive")

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);

  };

  const action = (
    <React.Fragment>
      
        {message === "Account is inactive" ? <a href="/signin" style={{textDecoration: 'none', color: '#FF2625'}}>Sign in</a> : <a style={{textDecoration: 'none', color: '#FF2625'}} href="/">Sign up</a> }
      
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  
  


  

  const [email, setEmail] = React.useState("");
  const emailList = users.map((user) => ({
    firstName: user.firstName,
    email: user.email,
    type: user.type,
  }));
  const [isClicked, setIsClicked] = React.useState(false);
  const [type, setType] = React.useState("password");
  const handleSubmit = (event) => {
    event.preventDefault();

    const emailExists = emailList.some((user) => user.email === email);

    if (emailExists) {
      const user = emailList.find((user) => user.email === email);
      let token = localStorage.getItem("user " + user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1))
      console.log("user " + user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1))
      console.log(token)
      if ( token === null) {
        
        if (user.type === "admin") {
          setUserType("admin");
          localStorage.setItem("userType", "admin");
        } else {
          setUserType("user");
          localStorage.setItem("userType", "user");
        }

        navigate("/home");
      } else {
        let token = JSON.parse(localStorage.getItem("user " + user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)))
        if(token.status === "inactive"){
          
          
          handleClick();
        } else {
          if (user.type === "admin") {
            setUserType("admin");
            localStorage.setItem("userType", "admin");
          } else {
            setUserType("user");
            localStorage.setItem("userType", "user");
          }
  
          navigate("/home");
        }
      }
    } else {
      setMessage("Account does not exist")
      handleClick();
    }
  };
  React.useEffect(() => {
    setUserType("");
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh" }}
        onLoad={localStorage.setItem("userType", "")}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${HeroBannerImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#FF2625" }}>
              <FitnessCenterIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                required
                name="password"
                label="Password"
                type={type}
                id="password"
                autoComplete="current-password"
              />
              <Button
                onClick={() => {
                  setIsClicked(!isClicked);
                  if (type === "password") {
                    setType("text");
                  } else {
                    setType("password");
                  }
                }}
                startIcon={
                  isClicked ? (
                    <VisibilityIcon sx={{ color: "#FF2625" }} />
                  ) : (
                    <VisibilityOffIcon sx={{ color: "#FF2625" }} />
                  )
                }
              ></Button>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="error"
                sx={{ mt: 3, mb: 2, backgroundColor: "#FF2625" }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/forgotpw" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </ThemeProvider>
    
  );
}