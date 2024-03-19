import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import emailjs from "@emailjs/browser";
import { users } from "../data/dummyData";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const Forgot = () => {
  const [email, setEmail] = React.useState("");

  const findUser = (email) => {
    const user = users.find((user) => user.email === email);
    return user ? user.firstName : console.log("User not found");
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_imz8xwe";
    const templateId = "template_p7fh1fb";
    const publicKey = "YKRjManmoxadNNvE0";

    const templateParams = {
      
      to_email: email,
      to_name: findUser(email).charAt(0).toUpperCase() + findUser(email).slice(1),
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        if(findUser(email))
        {console.log("SUCCESS!", response);
        alert("Email sent successfully");
        setEmail("");}
        else {
          throw new Error("User not found");
        }
      })
      .catch((error) => {
        console.log("FAILED...", error);
        alert("Email failed to send")
        setEmail('')
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#FF2625" }}>
            <FitnessCenterIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body2">
                  Please enter the email address that you used to register, and
                  we will send you a link to reset your password via Email.
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="error"
              sx={{ mt: 3, mb: 2, backgroundColor: "#FF2625" }}
              onClick={handleSubmit}
            >
              Send Email
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={handleSubmit} variant="body2">
                  Didn't recieve an email? Click here
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Forgot;
