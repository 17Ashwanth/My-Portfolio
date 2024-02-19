import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import nesto from '../Assests/icream.png'


function Food() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>


<Card className='' onClick={handleShow} style={{ width: '90%' }}>
<Card.Img variant="top" src={nesto} />
<Card.Body>
<Card.Title>COLD STONE CREAMERY</Card.Title>
</Card.Body>
</Card>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className='text-dark'>COLD STONE CREAMERY</Modal.Title>
</Modal.Header>
<Modal.Body>
<Row>
  <Col md={6}>
    <img src={nesto} style={{width:'100%',height:'25vh'}} alt="" />
    <div className="d-flex justify-content-between">
    <a href='https://github.com/17Ashwanth/Restaurent' target='_blank'><i style={{fontSize:'40px',color:'black'}} class="fa-brands fa-github fa-beat-fade mt-3"></i></a>
    <a href="https://restaurent-iota.vercel.app/" target='_blank'><i style={{fontSize:'40px',color:'black'}} class="fa-solid fa-link fa-beat-fade mt-3"></i></a>
    </div>
  </Col>
  <Col md={6}>
    <p style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                  ,fontStyle:"normal",color:'black'}}>
                    My first project named Cold Stone Creamery: a sleek restaurant website crafted with the fundamentals of HTML and CSS! Explore the art of web design as we bring a seamless online dining experience to life. Check it out and let us know your thoughts! 
                    <br />
                    <br />
                    Technologies Used : HTML and CSS
                  </p>
  </Col>
</Row>
</Modal.Body>
</Modal>



    </div>
  )
}

export default Food