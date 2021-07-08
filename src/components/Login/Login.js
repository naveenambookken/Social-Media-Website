import React from 'react'
import {Grid, Paper, Button, Typography, Link} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';




function Login() {
  const paperStyle={padding: 20, height:'70vh', width:280, margin:"20px auto" }
  const avatarStyle={backgroundColor:"#659bf5"}
  const btnstyle={margin:"8px 0"}
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField label='Username' placeholder='Enter Username' fullWidth required/>
          <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required/>
          <FormControlLabel
            control={
              <Checkbox
                name="checkedB"
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button type='submit' variant="contained" color="primary"  fullWidth style={btnstyle} >
            Sign In
          </Button>
          <Typography>
            <Link>
            Forgot password ?
            </Link>
          </Typography>
          <Typography>
            Do you have an account ? 
            <Link>
            Sign Up
            </Link>
          </Typography>
        
        </Paper>
      </Grid>
    </div>
  )
}

export default Login
