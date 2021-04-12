import React from 'react';
import Login from '../components/Login/Login';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import NoMatch from '../components/NoMatch';
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";




function Routes() {
    const token = useSelector((Store) => Store.authReducer.token);
    return (
        <Switch>
            <Route path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard">
                {token ? <Home />: <Redirect to="/" /> }
            </Route>

            <Route exact path="/">
                {token ? <Redirect to="/dashboard" /> :  <Login />}
            </Route>
            <Route component={NoMatch} />
        </Switch>
    );
}

export default Routes;


