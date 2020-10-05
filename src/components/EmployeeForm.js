import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Container, Row, Col, Card } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import EmployeeHeader from './EmployeeHeader';

const useStyles = makeStyles({
    root: {
      margin: 10,
      height: 110,
      flexGrow: 1,
      maxWidth: 400,
    },
    rootText: {
        width: '25ch',
    },
    rootButton: {
       margin:'10px',
    },
  });

  
export default class EmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.state={
          empName:''
        }
      }

    getEmployeeRepo=(empval)=>{
        this.setState( {
          empName : empval
        } )
      }

      findEmp = () => {
          this.props.history.push("/EmployeeDetails/" + this.state.empName);
      }

    render() {
        return (
            <div>
                <Card>
                   <EmployeeHeader header="Employee Explorer" />
                    <Card.Body>
                        <form className={useStyles.rootText} noValidate autoComplete="off">
                            <div>
                                <TextField id="empName" label="Enter Employee Name" color="secondary" onChange={(event) => this.getEmployeeRepo(event.target.value)} />
                                <Button style={{ margin: '10px' }} variant="contained" color="primary" onClick={this.findEmp} >
                                    Primary
</Button>
                            </div>
                        </form>

                    </Card.Body>
                </Card>

            </div>
        );
    }
}