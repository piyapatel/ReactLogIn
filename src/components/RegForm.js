import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Buttons from './Buttons';

const RegForm = () => {
  return (
    <div>      
        <Form>
          <div className='custom-card'>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <div className="position-relative custom-form-group">
                <Form.Control type="text" placeholder=" "/>  
                <label className='custom-placeholder'>Full Name<span className='red'>*</span></label> 
              </div>        
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <div className="position-relative custom-form-group">
                <Form.Control type="text" placeholder=" " />
                <label className='custom-placeholder'>Contact Number<span className='red'>*</span></label> 
              </div>
            </Form.Group>
          
            <Form.Group className="mb-3">
              <Form.Label>Birth Date</Form.Label>
              <Row className='custom-row'>
                <Col md={4} sm={4} className='custom-li'>
                  <Form.Select aria-label="Default select example">
                  <option>Day<span className='red'>*</span></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Form.Select>
                </Col>
                <Col md={4} sm={4} className='custom-li'>
                  <Form.Select aria-label="Default select example">
                  <option>Month <span className='red'>*</span></option>
                  <option value="1">Jan</option>
                  <option value="2">Feb</option>
                  <option value="3">March</option>
                </Form.Select>
                </Col>
                <Col md={4} sm={4} className='custom-li'>
                  <Form.Select aria-label="Default select example">
                  <option>Year<span className='red'>*</span></option>
                  <option value="1">1995</option>
                  <option value="2">1996</option>
                  <option value="3">1997</option>
                </Form.Select>
                </Col>
              </Row>
            
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <div className="position-relative custom-form-group">
                <Form.Control type="email" placeholder=" " />
                <label className='custom-placeholder'>Email address<span className='red'>*</span></label> 
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <div className="position-relative custom-form-group">
                <Form.Control type="password" placeholder=" " />
                <label className='custom-placeholder'>Password<span className='red'>*</span></label> 
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <div className="position-relative custom-form-group">
                <Form.Control type="password" placeholder=" " />
                <label className='custom-placeholder'>Confirm Password<span className='red'>*</span></label> 
              </div>
            </Form.Group>
          </div>
          <Buttons/>
        </Form>
      
    </div>
  )
}

export default RegForm