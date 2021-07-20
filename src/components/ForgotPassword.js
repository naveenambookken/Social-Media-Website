import React from "react";
import { Grid, Paper, Button, Typography, Link } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Alert from "@material-ui/lab/Alert";
import { useTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useAuth } from "../Context/AuthContext";
import { useState } from "react";

function ForgotPassword() {
  const { resetPassword } = useAuth();
  const history = useHistory();
  const [Error, setError] = useState();
  const [Message, setMessage] = useState();
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
    email: "",
  };
  async function onSubmit(values, props) {
    try {
      setMessage("");
      setError("");
      await resetPassword(values.email);
      setMessage("Check your inbox for furthur instructions");
    } catch {
      setError("Failed to reset password");
    }
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("please enter valid email")
      .required("Required"),
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
                <h2>Forgot Password</h2>
              </Grid>

              {Error && <Alert severity="error">{Error}</Alert>}
              {Message && <Alert severity="success">{Message}</Alert>}
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                {(props) => (
                  <Form>
                    <Field
                      as={TextField}
                      label="Email"
                      name="email"
                      placeholder="Enter your email"
                      helperText={<ErrorMessage name="email" />}
                      error={Boolean(props.errors.email)}
                      fullWidth
                      required
                    />

                    <Grid align="center" style={{ marginTop: "25px" }}>
                      <Button
                        type="submit"
                        style={Btnstyle}
                        variant="contained"
                        disabled={props.isSubmitting}
                      >
                        {props.isSubmitting ? "Loading.." : "Reset"}
                      </Button>
                    </Grid>
                  </Form>
                )}
              </Formik>

              <Typography align="center">
                <Link
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push("/login")}
                >
                  Log In
                </Link>
              </Typography>
              <Typography style={{ marginTop: "80px" }}>
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

export default ForgotPassword;

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
