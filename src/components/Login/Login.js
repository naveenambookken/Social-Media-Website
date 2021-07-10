import React from "react";
import { Grid, Paper, Button, Typography, Link } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Login() {
  const history = useHistory();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const paperStyle = {
    height: 450,
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
  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
    console.log(props);
  };
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
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={6} style={{ padding: 20 }}>
              <Grid align="center">
                <Avatar style={avatarStyle}>
                  <LockOutlinedIcon />
                </Avatar>
                <h2>Sign In</h2>
              </Grid>

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
                      
                    />
                    <Field
                      as={FormControlLabel}
                      name="remember"
                      control={<Checkbox color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      style={Btnstyle}
                      disabled={props.isSubmitting}
                    >
                      {props.isSubmitting ?  "Loading.." : "Sign In" }
                    </Button>
                  </Form>
                )}
              </Formik>
              <Typography>
                <Link style={{ cursor: "pointer" }}>Forgot password ?</Link>
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
                width="300"
                height="450"
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
