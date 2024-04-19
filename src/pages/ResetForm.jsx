import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Loader from '../components/Loader';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const ResetForm = () => {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, []);
  const [isClicked, setIsClicked] = React.useState(false);
  const [type, setType] = React.useState('password');
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return loading? <Loader loading={loading} /> : (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#FF2625' }}>
            <FitnessCenterIcon />
          </Avatar>
          <Typography component="h1" variant="h5" >
            Type a new Password
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              
              <Grid item xs={12} >
                <TextField
                fullWidth
                  required
                  name="password"
                  label="New Password"
                  type={type}
                  id="password"
                  autoComplete="new-password"

                />
              </Grid>
              
              <Grid item xs={12} sm={10}>
                <TextField
                fullWidth
                  required
                  name="password"
                  label="Confirm New Password"
                  type={type}
                  id="password"
                  autoComplete="new-password"

                />
              </Grid>
              <Grid item xs={12} sm={1}>
              <Button onClick={() => { 
                setIsClicked(!isClicked);
                if (type === 'password'){
                  setType('text')
                } else {
                  setType('password')
                }
                }}  startIcon={isClicked ? <VisibilityIcon sx={{ color: "#FF2625"}} /> : <VisibilityOffIcon sx={{ color: "#FF2625"}} />} >
                
                </Button>
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant='contained'
              color='error'
              sx={{ mt: 3, mb: 2 , backgroundColor: '#FF2625'}}
              href='/signin'
            >
              Reset
            </Button>
            
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default ResetForm;