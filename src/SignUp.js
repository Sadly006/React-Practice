import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [postData, setPostData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    contactNumber: "",
    password: "",
  });
  const classes = useStyles();

  const history = useHistory();

  const handleClick = () => {
    history.push("/signin");
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off">
        <Typography variant="h6" align="center">
          Sign Up!!
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
          className={classes.textField}
          name="firstName"
          variant="outlined"
          label="First Name"
          fullWidth
          value={postData.firstName}
          onChange={(e) =>
            setPostData({ ...postData, firstName: e.target.value })
          }
        />
        <TextField
          className={classes.textField}
          name="lastName"
          variant="outlined"
          label="Last Name"
          fullWidth
          value={postData.lastNamestName}
          onChange={(e) =>
            setPostData({ ...postData, lastName: e.target.value })
          }
        />
        <TextField
          className={classes.textField}
          name="contactNumber"
          variant="outlined"
          label="Contact Number"
          fullWidth
          value={postData.contactNumber}
          onChange={(e) =>
            setPostData({ ...postData, contactNumber: e.target.value })
          }
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
        <Button
          className={classes.buttonSubmit}
          color="primary"
          variant="primary"
          type="submit"
          size="larze"
        >
          Sign Up
        </Button>
        <Button
          className={classes.buttonSubmit}
          color="primary"
          variant="primary"
          size="larze"
          onClick={handleClick}
        >
          SIgn In
        </Button>
      </form>
    </Paper>
  );
};

export default SignUp;
