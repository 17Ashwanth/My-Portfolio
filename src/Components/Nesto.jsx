import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import nesto from '../Assests/nesto.png'


function Nesto() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>


<Card onClick={handleShow} style={{ width: '90%' }}>
<Card.Img variant="top" src={nesto} />
<Card.Body>
<Card.Title>NESTO-MART</Card.Title>
</Card.Body>
</Card>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className='text-dark'>NESTO-MART</Modal.Title>
</Modal.Header>
<Modal.Body>
<Row>
  <Col md={6}>
    <img src={nesto} style={{width:'100%',height:'25vh'}} alt="" />
    <div className="d-flex justify-content-between">
    <a href='https://github.com/17Ashwanth/Nesto-front-end' target='_blank'><i style={{fontSize:'40px',color:'black'}} class="fa-brands fa-github fa-beat-fade mt-3"></i></a>
    <a href="https://lnkd.in/g_RQAyZK" target='_blank'><i style={{fontSize:'40px',color:'black'}} class="fa-solid fa-link fa-beat-fade mt-3"></i></a>
    </div>
  </Col>
  <Col md={6}>
    <p style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                  ,fontStyle:"normal",color:'black'}}>
                    Nesto-mart, my Angular-based e-commerce project revolutionizing online shopping! From wishlist to checkout, users can seamlessly browse, save, and purchase items with ease. Integrated with MongoDB for robust data storage and PayPal for secure transactions.
                    <br />
                    <br />
                    Technologies Used : HTML,CSS,Bootstrap,JS, <br /> Angular  ,MongoDB
                  </p>
  </Col>
</Row>
</Modal.Body>
</Modal>



    </div>
  )
}

export default Nesto