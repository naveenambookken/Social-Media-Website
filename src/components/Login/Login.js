import React from "react";
import { Grid, Paper, Button, Typography, Link, Divider } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Icon from '@material-ui/core/Icon';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Alert from '@material-ui/lab/Alert';
import { useTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useAuth } from "../../Context/AuthContext";
import { useState } from "react";

function Login() {
  const { login } = useAuth();
  const history = useHistory();
  const [Error, setError] = useState();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const paperStyle = {
    
    width: !matches ? 300 : 600,
    margin: "50px auto",
  };
  const avatarStyle = { backgroundColor: "#659bf5" };

  const Btnstyle = {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    borderRadius: 50,
    border: 0,
    color: "white",
    height: 30,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    margin: "8px 0",
  };

  const initialValues = {
    username: "",
    password: "",
    remember: false,
  };
  async function onSubmit(values, props) {
    try {
      setError("");
      
      await login(values.username, values.password);
      history.push("/");
    } catch {
      
      setError("Failed to Log In");
    }
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("please enter valid email")
      .required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid
            container
            direction="row"
            
            
          >
            <Grid item xs={12} sm={6} style={{ padding: 20 }}>
              <Grid align="center">
                <Avatar style={avatarStyle}>
                  <LockOutlinedIcon />
                </Avatar>
                <h2>Sign In</h2>
              </Grid>
              {Error && <Alert severity="error">{Error}</Alert>}
              
              <Divider variant="middle" ></Divider>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                {(props) => (
                  <Form>
                    <Field
                      as={TextField}
                      label="Username"
                      name="username"
                      placeholder="Enter Username"
                      helperText={<ErrorMessage name="username" />}
                      error={Boolean(props.errors.username)}
                      fullWidth
                      required
                    />

                    <Field
                      as={TextField}
                      label="Password"
                      name="password"
                      placeholder="Enter Password"
                      type="password"
                      helperText={<ErrorMessage name="password" />}
                      fullWidth
                      required
                      error={Boolean(props.errors.password)}
                    />
                    <Field
                      as={FormControlLabel}
                      name="remember"
                      control={<Checkbox color="primary" />}
                      label="Remember me"
                    />
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
              
              <Grid align="center" style={{marginBottom:"20px"}} >
              <Box style={{margin:"10px"}}>OR</Box>
              <Box style={{display:"flex", justifyContent:"center", alignItems:"center" ,marginBottom:"10px" ,textAlign: 'center'}}>Connect with
              
              <Icon style={{marginLeft:"5px"}}>
              <img style={{height:"100%"}} src="https://img.icons8.com/color/24/000000/google-logo.png"/>
              </Icon>
            
              <Icon style={{marginLeft:"05px"}} >
              <img style={{height:"100%"}} src="https://img.icons8.com/color/24/000000/facebook-new.png" alt=""/>
                
              </Icon>
              </Box>
                 
              </Grid>
              <Typography>
                <Link style={{ cursor: "pointer" }} onClick={()=>history.push('/forgot-password')} >Forgot password ?</Link>
              </Typography>
              <Typography>
                Do you have an account ?
                <Link
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push("/signup")}
                >
                  Sign Up
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ display: !matches ? "none" : "block" }}>
              <img
                style={{width:"100%", height:"100%", objectFit:"cover"}}
                src="https://images.all-free-download.com/images/graphiclarge/digital_technology_background_modern_silhouette_3d_design_6837527.jpg"
                alt="i"
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Box mt={8}>
        <Copyright />
      </Box>
    </div>
  );
}

export default Login;

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
