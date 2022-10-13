import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
      WWW.p2b-ethiopia.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
    const navigate = useNavigate();
    const [registerInput, setRegister] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        error_list: [],
        confirm_error: "",
      });

      const handleInput = (e) => {
        // e.persist();
        setRegister({ ...registerInput, [e.target.name]: e.target.value });
      };

      const registerSubmit = (e) => {
        e.preventDefault();
        console.log('inside register')
      const data = {
        email: registerInput.email,
        password: registerInput.password,
      };

      const confirmPassword = registerInput.confirmPassword;
    if (confirmPassword === registerInput.password) {
      axios.get("/sanctum/csrf-cookie").then((res) => {
        console.log("inside csrf");
        axios.post("/api/register", data).then((res) => {
          if (res.data.status === 200) {
            localStorage.setItem("auth_token", res.data.token);
            localStorage.setItem("auth_email", res.data.email);
            localStorage.setItem("auth_id", res.data.id);
            navigate('/');
    } 
    else{
        setRegister({
            ...registerInput,
            error_list: res.data.validation_errors,
          });
    }})})}
    else {
      setRegister({
        ...registerInput,
        confirm_error: "passwords are not the same",
      });
    }
}

  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={registerSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  onChange={handleInput}
                  name="email"
                  value={registerInput.email}
                  autoComplete="email"
                />
                {<span style={{color:"red"}}>{registerInput.error_list.email}</span>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={registerInput.password}
                  onChange={handleInput}
                  id="password"
                  autoComplete="new-password"
                />
                {<span style={{color:"red"}}>{registerInput.error_list.password}</span>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmpassword"
                  value={registerInput.confirmPassword}
                  onChange={handleInput}
                  autoComplete="new-password"
                />
                {<span style={{ color: "red" }}>{registerInput.confirm_error}</span>}
                
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}