import React from "react";
import { useHistory } from "react-router";
import { Grid, Paper, Button, Typography, Link } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import Alert from '@material-ui/lab/Alert';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup';
import { FormHelperText } from "@material-ui/core";

import {useAuth} from '../../Context/AuthContext'
import { useState } from "react";


function SignUp() {
  const {signup}= useAuth()
    const history = useHistory()
    const [Error, setError] = useState()
  const paperStyle = { padding: 20, width: 300, margin: "20px auto" };
  const avatarStyle = { backgroundColor: "#659bf5" };
  const headerTitleStyle = { margin: "0" };
  const Btnstyle = {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 50,
    border: 0,
    color: "white",
    height: 30,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  };

  const initialValues={
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
    termsAndConditions:false
  }
  async function onSubmit(values, props){
   try{
     setError("")
     await signup(values.email,values.password)
      history.push('/login')
   }catch{
     setError("Failed to Sign Up")
   }
  }
  
  const validationSchema=Yup.object().shape({
    name:Yup.string().min(3,'Its too short').required('Required'),
    email:Yup.string().email('Enter valid email').required('Required'),
    password:Yup.string().min(6,"Password minimum length should be 6").required('Required'),
    confirmPassword:Yup.string().oneOf([Yup.ref('password')],"password not matched").required('Required'),
    termsAndConditions:Yup.string().oneOf(["true"],"Accept terms & conditions")
  })


  return (
    <div>
      <Grid >
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}></Avatar>
            <h2 style={headerTitleStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
            {Error && <Alert severity="error">{Error}</Alert>}
            </Grid>
          <Formik initialValues={initialValues}  onSubmit={onSubmit} validationSchema={validationSchema} >
            {(props)=>(
              <Form>
                
            <Field as={TextField}
              fullWidth
              label="Name"
              name='name'
              placeholder="Enter Your Full Name"
              error={Boolean(props.errors.name)}
              helperText={<ErrorMessage name="name"/>}
            />
            <Field as={TextField}
              type="email"
              fullWidth
              label="Email"
              name='email'
              placeholder="Enter Your Email"
              error={Boolean(props.errors.email)}
              helperText={<ErrorMessage name="email"/>}
            />

            <Field as={TextField}
              type="password"
              fullWidth
              label="Password"
              name='password'
              placeholder="Enter a password"
              error={Boolean(props.errors.password)}
              helperText={<ErrorMessage name="password"/>}
            />
            <Field as={TextField}
              type="password"
              fullWidth
              label="Confirm Password"
              name='confirmPassword'
              placeholder="Retype that password"
              error={Boolean(props.errors.confirmPassword)}
              helperText={<ErrorMessage name="confirmPassword"/>}
            />
            <FormControlLabel
              control={<Field as={Checkbox} name="termsAndConditions"  />}
              label="I accept the Terms and Conditions."
              
            />
            <FormHelperText error={Boolean(props.errors.termsAndConditions)} ><ErrorMessage name="termsAndConditions"/></FormHelperText>
            <Grid align="center" style={{marginTop:"25px"}}>
              <Button type="submit" style={Btnstyle} variant="contained"
              disabled={props.isSubmitting}
              >
                {props.isSubmitting ?  "Loading.." : "Sign Up" }
                
              </Button>
            </Grid>
          
              </Form>
  )}
          </Formik>
            <Box textAlign="left" fontWeight="fontWeightLight" style={{marginTop:"25px"}}>
            Already have an account ? 
            <Link style={{cursor:"pointer"}} onClick={()=>history.push('/login')} >
            Login here
            </Link>
          </Box>
        </Paper>
      </Grid>
      <Box mt={8}>
        <Copyright />
      </Box>
    </div>
  );
}

export default SignUp;

//copyright
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/naveenambookken">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
