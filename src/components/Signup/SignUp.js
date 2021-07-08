import React from "react";
import { Grid, Paper, Button, Typography, Link } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";

//phone number input field imports
import MuiPhoneNumber from "material-ui-phone-number";

//radio button imports
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

function SignUp() {
  const paperStyle = { padding: 20, width: 300, margin: "20px auto" };
  const avatarStyle = { backgroundColor: "#659bf5" };
  const headerTitleStyle = { margin: "0" };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}></Avatar>
            <h2 style={headerTitleStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </Grid>
          <form>
            <TextField
              fullWidth
              label="Name"
              placeholder="Enter Your Full Name"
            />
            <TextField
              type="email"
              fullWidth
              label="Email"
              placeholder="Enter Your Email"
            />

            <FormControl component="fieldset" style={{ margin: "10px 0" }}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                style={{ display: "initial" }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>

            <MuiPhoneNumber
              name="phone"
              label="Phone Number"
              defaultCountry={"in"}
              fullWidth
            />

            <TextField
              type="password"
              fullWidth
              label="Password"
              placeholder="Enter a password"
            />
            <TextField
              type="password"
              fullWidth
              label="Confirm Password"
              placeholder="Retype that password"
            />
            <FormControlLabel
              control={<Checkbox name="checked" />}
              label="I accept the Terms and Conditions."
            />

            <Button type="submit" variant="contained" color="primary">
              Sign Up
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}

export default SignUp;
