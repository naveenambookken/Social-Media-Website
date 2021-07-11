import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Container, Grid, Paper, Typography } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));



function Profile() {

 const classes = useStyles();


    return (
        <div>
           
        </div>
    )
}

export default Profile
