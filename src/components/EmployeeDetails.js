import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import EmployeeHeader from './EmployeeHeader';

export default class EmployeeDetails extends Component {
    constructor(props) {
        super(props);
        // match.params.name -> get query string from url
        // all employees object
        this.state = {
            name: props.match.params.name,
            employees: []
        }
    }

    componentDidMount() {

        // recursion to get all employees
        this.getEmployeeNames(this.state.name);
    }

    getEmployeeNames = (name) => {
        if (name === "")
            return null;

        axios.get(`http://api.additivasia.io/api/v1/assignment/employees/` + name)
            .then(res => {
                if (res["data"] && res["data"][1] && res["data"][1]["direct-subordinates"] !== undefined) {
                    
                    // add new employees in all employees object
                    let employees = this.state.employees;
                    employees.push.apply(employees, res["data"][1]["direct-subordinates"]);
                    
                    // set state to render the object.
                    this.setState({
                        employees: employees
                    });
                    for (var i = 0; i < res["data"][1]["direct-subordinates"].length; i++) {
                        this.getEmployeeNames(res["data"][1]["direct-subordinates"][i]);
                    }

                }
            })
    }




    render() {
        // get unique values
        let uniqueEmployees = [...new Set(this.state.employees)];
        var result = '';
        if(uniqueEmployees.length < 1){
            
           result=  <h4>{`No direct subordinates found`}</h4>
        }
        else{
            // render all employees to display
         result = uniqueEmployees.map(employee => {
            return (
                <h4>{employee}</h4>
            );
        })
    }

        return (
            <div>
                <Card>
                <EmployeeHeader header="Employee Overview" />
                    <Card.Body className="text-center">
                        {result}
                    </Card.Body>
                </Card>

            </div>
        );
    }
}