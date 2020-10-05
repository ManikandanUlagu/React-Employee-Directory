import React from 'react';
import {  Card } from 'react-bootstrap';
 
function EmployeeHeader(props) {
    return <Card.Header  className="text-center">{props.header}</Card.Header>;
  }

  export default EmployeeHeader;