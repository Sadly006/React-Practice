import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import SignUp from "./SignUp";
import SignUpOrIn from "./JoinUs";
import SignIn from "./SignIn";
import adidas from "./images/adidas.png";
import bg from "./images/back.png";
import makeStyles from "./styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const styles = {
  paperContainer: {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
  },
};

const App = () => {
  const classes = makeStyles();

  // const history = useHistory();

  // const handleClick = () => {
  //   history.push("/welcome");
  // };

  const Logo = () => {
    return(
    <Grid container justify="center">
      <img className={classes.image} src={adidas} width="150" />
    </Grid>
    );
  };

  return (
    
    <div>
      <Router>
      <Container>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Sign-In/Sign-Up
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing="3"
            >
              <Grid item xs={12} sm={7}></Grid>

              <Grid item xs={15} sm={4}>
                  <Link to={"/welcome"}>
                    <Logo />
                  </Link>
                <Grid>
                  {/* <SignUpOrIn /> */}
                  
                    <Route path="/welcome" component={SignUpOrIn}></Route>
                    <Route path="/signup" component={SignUp}></Route>
                    <Route path="/signin" component={SignIn}></Route>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
      </Router>
    </div>
    
  );
};

export default App;
