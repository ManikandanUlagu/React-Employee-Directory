import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Container, Row, Col, Card } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch } from "react-router-dom";

import EmployeeForm from './components/EmployeeForm';
import EmployeeDetails from './components/EmployeeDetails'


export default class App extends Component {


render(){
    return(
        <div>
    <Switch>
        <Route path="/EmployeeDetails/:name" component={EmployeeDetails} />
        <Route exact path="/" component={EmployeeForm} />
    </Switch>
        </div>
    );
}
}