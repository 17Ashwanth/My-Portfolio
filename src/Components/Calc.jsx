import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import nesto from '../Assests/area.png'


function Calc() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>


<Card onClick={handleShow} style={{ width: '90%' }}>
<Card.Img variant="top" src={nesto} />
<Card.Body>
<Card.Title>AREA-CALCULATOR</Card.Title>
</Card.Body>
</Card>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className='text-dark'>AREA-CALCULATOR</Modal.Title>
</Modal.Header>
<Modal.Body>
<Row>
  <Col md={6}>
    <img src={nesto} style={{width:'100%',height:'25vh'}} alt="" />
    <div className="d-flex justify-content-between">
    <a href='https://github.com/17Ashwanth/Area-Calculator' target='_blank'><i style={{fontSize:'40px',color:'black'}} class="fa-brands fa-github fa-beat-fade mt-3"></i></a>
    <a href="https://area-calculator-five.vercel.app/" target='_blank'><i style={{fontSize:'40px',color:'black'}} class="fa-solid fa-link fa-beat-fade mt-3"></i></a>
    </div>
  </Col>
  <Col md={6}>
    <p style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                  ,fontStyle:"normal",color:'black'}}>
                    Area Calculator website which Measure the areas of circles, rectangles, triangles, and squares effortlessly.Empower your geometry skills with just a few clicks! In Future this project can be implement in various way such as not only includes Area but also other measurement such as Volume, Density, Perimeter.
                    <br />
                    <br />
                    Technologies Used : HTML,CSS,Bootstrap,JS, <br /> React
                  </p>
  </Col>
</Row>
</Modal.Body>
</Modal>



    </div>
  )
}

export default Calc