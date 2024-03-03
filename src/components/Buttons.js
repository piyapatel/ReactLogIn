import React from 'react'
import { Button } from 'react-bootstrap'

const Buttons = () => {
  return (
        <div className='d-flex justify-content-center mt-4'>          
          <Button variant="outline-primary custom-btn text-blue">Cancel</Button>
          <Button variant="primary" type="submit" className='btn-blue custom-btn ms-3'>Submit</Button>
      </div>
  )
}

export default Buttons