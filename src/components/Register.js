import React from 'react'
import { Col, Row } from 'react-bootstrap'
import RegForm from './RegForm'

const Register = () => {
  return (
    <div className='registration'>
        <Col xl={3} lg={4} md={4} className='m-auto custom-max-width'>
            <h5>Create User Account</h5>               
            <RegForm/>
        </Col>
    </div>
  )
}

export default Register