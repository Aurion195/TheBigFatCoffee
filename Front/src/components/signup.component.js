import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import { PropTypes } from 'react'
import axios from 'axios';
/**
* @summary Function that add Copyright
* @return {HTML} Returning html code with Copyright content.
*/
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );

/** @constant {CSS} */}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
/**
* @summary SignUP component that is use at the SignUp page to register to the website 
* @return {HTML}  HTMl content with SignUp inputs
*/
function RegistrationForm(props) {
  const [state, setState] = useState({
      firstname: "",
      lastname:"",
      email:"",
      password: ""
  })
  const handleChange = (e) => {
      const { id, value } = e.target
      setState(prevState => ({
          ...prevState,
          [id]: value
      }))
  }
  const handleSubmitClick = (e) => {
      e.preventDefault();
      
      sendDetailsToServer()

  }
  /** 
* @summary Send details to server
*/
const sendDetailsToServer = () => {
  if (state.email.length &&  state.firstname.length&& state.lastname.length) {
      //props.showError(null);
      console.log("nfiefozfe")
      const payload = {
          "firstname": state.firstname,
          "lastname": state.lastname,
          "email": state.email,
          "password": state.password,
      }
      axios.post('http://localhost:3000/register', payload)
          .then(function(response) {
              if (response.status === 200) {
                  setState(prevState => ({
                          ...prevState,
                          'successMessage': 'Registration successful. Redirecting to home page..'
                      }))
                      //redirectToHome();
                  console.log('Registration successful')
              } else {
                  console.log("Some error ocurred");
              }
          })
          .catch(function(error) {
              console.log(error);
          });
  } else {
      console.log('Please enter valid username and password')
  }

}

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form  role="form" className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstname"
                label="First Name"
                value = { state.firstname }
                onChange = { handleChange }
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                autoComplete="lname"
                value = { state.lastname }
                onChange = { handleChange }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value = { state.email }
              onChange = { handleChange }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value = { state.password }
        onChange = { handleChange }
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
          
            fullWidth
            variant="contained"
            color="primary"
            
            className={classes.submit}
            onClick = { handleSubmitClick } 
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );

    }
export default RegistrationForm

