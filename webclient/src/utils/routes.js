import React from 'react';
import Login from '../components/Login/Login';
import Dashboard from '../components/Dashboard/Dashboard';
import About from '../components/About/About';
import NoMatch from '../components/NoMatch';
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";




function Routes() {
    const token = useSelector((Store) => Store.authReducer.token);
    return (
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/dashboard">
                {token ? <Dashboard />: <Redirect to="/" /> }
            </Route>

            <Route path="/">
                {token ? <Redirect to="/dashboard" /> :  <Login />}
            </Route>
            <Route component={NoMatch} />
        </Switch>
    );
}

export default Routes;


