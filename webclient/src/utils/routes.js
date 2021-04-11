import React from 'react';
import Login from '../cmponents/Login/Login';
import Home from '../cmponents/Home/Home';
import About from '../cmponents/About/About';
import NoMatch from '../cmponents/NoMatch';
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


