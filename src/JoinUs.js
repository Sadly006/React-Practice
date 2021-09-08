import React, { useState } from "react";
import { Button, Paper } from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

const SignUpOrIn = () => {
  const classes = useStyles();

  const history = useHistory();

  const handleClick = () => {
    history.push("/signup");
  };

  return (
      <Button
        className={classes.buttonSubmit}
        variant="conatained"
        size="larze"
        color="#f44336"
        onClick={handleClick}
      >
        Join Us!!
      </Button>
  );
};

export default SignUpOrIn;
