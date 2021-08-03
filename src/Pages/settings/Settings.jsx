import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useAuth } from "../../Context/AuthContext";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Alert } from "@material-ui/lab";
import { Button, Grid, InputAdornment } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import { Paper } from "@material-ui/core";
import { useEffect } from "react";

export default function Settings() {
  const { currentUser, updateEmail, updatePassword, addProfilePic, profileImage } = useAuth();
  const [Error, setError] = useState();
  const [Message, setMessage] = useState();
 
  const paperStyle = { padding: 20, width: 350, margin: "20px auto" };
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
    name: currentUser && currentUser.displayName,
    email: currentUser && currentUser.email,
    password: "",
  };

useEffect(() => {
 
})

  function onSubmit(values, props) {
    setError("");
    setMessage("");
    const promises = [];
    if (values.email !== currentUser.email) {
      promises.push(updateEmail(values.email));
    }
    if (values.password) {
      promises.push(updatePassword(values.password));
    }
    Promise.all(promises)
      .then(() => {
        setMessage("Successfully Updated");
        props.setSubmitting(false);
      })
      .catch(() => {
        setError("Failed to Update");
        props.setSubmitting(false);
      })
      .finally(() => {});
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Its too short").required("Required"),
    email: Yup.string().email("please enter valid email").required("Required"),
    password: Yup.string().min(6, "Password minimum length should be 6"),

    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "password not matched"
    ),
  });

  return (
    <Grid >
      <Paper elevation={10} style={paperStyle}>
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        {Error && <Alert severity="error">{Error}</Alert>}
        {Message && <Alert severity="success">{Message}</Alert>}
        
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <label>Profile Picture</label>
              <div className="settingsPP">
                <img
                  
                  src={`${currentUser && currentUser.photoURL}`}
                  alt=""
                />
                <label htmlFor="fileInput">
                  <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                </label>
                <input
                  id="fileInput"
                  type="file"
                  onChange={(e)=>{
                    addProfilePic(e.target.files[0])
                  }}
                  style={{ display: "none" }}
                  className="settingsPPInput"
                />
              </div>
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
      </div>
    </div>
    </Paper>
    </Grid>
  );
}
