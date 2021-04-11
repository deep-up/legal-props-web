import React from 'react';
import Login from '../Components/Login/Login';
import Home from '../Components/Home/Home';
import About from '../Components/About/About';
import NoMatch from '../Components/NoMatch';
import { Route, Switch } from "react-router-dom";



function Routes() {
    return (
        <Switch>
            <Route path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Login} />
            <Route component={NoMatch} />
        </Switch>
    );
}

export default Routes;


