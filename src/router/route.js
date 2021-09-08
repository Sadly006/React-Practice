import React from "react";
import SignUp from "../SignUp";
import SignUpOrIn from "../JoinUs";
import { Switch, Route } from 'react-router';
import SignIn from "../SignIn";

const routePage = () => {
    return(
        <Switch>
            <Route path="/welcome" component={SignUpOrIn}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/signin" component={SignIn}></Route>
        </Switch>
    )
}

export default routePage;