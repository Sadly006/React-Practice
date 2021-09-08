import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const [postData, setPostData] = useState({ email: "", password: "" });
  const classes = useStyles();

  const history = useHistory();

  const handleClick = () => {
    history.push("/signup");
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off">
        <Typography align="center" variant="h6">
          Login to your account!!
        </Typography>
        <TextField
          className={classes.textField}
          name="email"
          variant="outlined"
          label="Email Address"
          fullWidth
          value={postData.email}
          onChange={(e) => setPostData({ ...postData, email: e.target.value })}
        />
        <TextField
          name="password"
          variant="outlined"
          label="Password"
          fullWidth
          type="password"
          value={postData.password}
          onChange={(e) =>
            setPostData({ ...postData, password: e.target.value })
          }
        />
        <Button type="submit" variant="conatained" size="small" color="#f44336">
          Sign in
        </Button>
        <Button
          color="primary"
          variant="primary"
          size="larze"
          onClick={handleClick}
        >
          Sign Up
        </Button>
      </form>
    </Paper>
  );
};

export default SignIn;
