import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";

import {useAuth } from '../../Context/AuthContext'
import { useState } from "react";
import EditProfile from './EditProfile'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bgbody: {
    width: "100%",
    height: 200,
    background: "linear-gradient(360deg, #efefef 30%, #e0e0e0 90%)",
  },
  avatarStyle: {
    width: "80px",
    height: "80px",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function Profile() {
  const {currentUser}= useAuth();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <Grid container>
      <Grid xs={12}>
        <Grid className={classes.bgbody}></Grid>
        <Grid align="center" style={{ position: "relative", top: "-50px" }}>
          <Avatar className={classes.avatarStyle}></Avatar>
        </Grid>
      </Grid>
                
        <Grid container direction="row" style={{margin:"10px"}}>
          <Typography>Name   :  {currentUser && currentUser.email} </Typography>
        </Grid>
        
          <Grid container direction="row"  style={{margin:"10px"}} >
            <Typography>Email  : {currentUser && currentUser.email}  </Typography>
          </Grid>
          <Grid xs  align="center"  style={{marginTop:"50px"}} >
          <Button variant="contained" color="primary" onClick={handleOpen} >Edit Profile </Button>
          </Grid>
          <EditProfile open={open} handleOpen={handleOpen} handleClose={handleClose}   />
        
    </Grid>
  );
}

export default Profile;
