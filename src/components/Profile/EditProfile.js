import React from "react";
import { useHistory } from "react-router";
import {
  Grid,
  Paper,
  Button,
  Link,
  Modal,
  InputAdornment,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useAuth } from "../../Context/AuthContext";
import { useState } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";

function EditProfile({ handleClose, open }) {
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const history = useHistory();
  const [Error, setError] = useState();
  const [Message, setMessage] = useState();
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

  const initialValues = {
    name: currentUser && currentUser.email,
    email: currentUser && currentUser.email,
    password: "",
    confirmPassword: "",
  };

  
  
  function onSubmit(values, props) {
    setError("")
        setMessage("")
    const promises = []
     if(values.email !== currentUser.email){
       promises.push(updateEmail(values.email))
       
     }
     if(values.password){
       promises.push(updatePassword(values.password))
       
      }
      Promise.all(promises).then(()=>{
        
        setMessage("Successfully Updated")
        props.setSubmitting(false)
        
      }).catch(()=>{
        setError("Failed to Update")
        props.setSubmitting(false)
       
     }).finally(()=>{
        
     })
    
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Its too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    password: Yup.string()
      .min(6, "Password minimum length should be 6"),
      
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "password not matched"),
      
  });

  return (
    <Modal open={open} onClose={handleClose}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}></Avatar>
            <h2 style={headerTitleStyle}>Edit Profile</h2>

            {Error && <Alert severity="error">{Error}</Alert>}
            {Message && <Alert severity="success">{Message}</Alert>}
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
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  label="Name"
                  name="name"
                  
                  helperText={<ErrorMessage name="name" />}
                />
                <Field
                  as={TextField}
                  type="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  label="Email"
                  name="email"
                  error={Boolean(props.errors.email)}
                  helperText={<ErrorMessage name="email" />}
                />

                <Field
                  as={TextField}
                  name="password"
                  label="Password"
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  placeholder="Leave blank to keep the same"
                  error={Boolean(props.errors.password)}
                  helperText={<ErrorMessage name="password" />}
                />
                <Field
                  as={TextField}
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  error={Boolean(props.errors.confirmPassword)}
                  placeholder="Leave blank to keep the same"
                  helperText={<ErrorMessage name="confirmPassword" />}
                />

                <Grid align="center" style={{ marginTop: "25px" }}>
                  <Button
                    type="submit"
                    style={Btnstyle}
                    variant="contained"
                    disabled={props.isSubmitting}
                  >
                    {props.isSubmitting ? "Loading.." : "Save"}
                  </Button>
                </Grid>
              </Form>
            )}
          </Formik>
          <Box textAlign="center" style={{ marginTop: "25px" }}>
            <Link style={{ cursor: "pointer" }} onClick={handleClose}>
              Cancel
            </Link>
          </Box>
        </Paper>
      </Grid>
    </Modal>
  );
}

export default EditProfile;
