import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import alert from '../Assests/transnit.png'


function Alert() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>


<Card onClick={handleShow} style={{ width: '90%' }}>
<Card.Img variant="top" src={alert} />
<Card.Body>
<Card.Title>TRANSIST ALERT HUB</Card.Title>
</Card.Body>
</Card>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className='text-dark'>TRANSIST ALERT HUB</Modal.Title>
</Modal.Header>
<Modal.Body>
<Row>
  <Col md={6}>
    <img src={alert} style={{width:'100%',height:'25vh'}} alt="" />
    <div className="d-flex justify-content-between">
    <a href='https://github.com/17Ashwanth/Transist-Alert-Hub-Frontend' target='_blank'><i style={{fontSize:'40px',color:'black'}} class="fa-brands fa-github fa-beat-fade mt-3"></i></a>
    <a href="https://lnkd.in/g-hFZYpb" target='_blank'><i style={{fontSize:'40px',color:'black'}} class="fa-solid fa-link fa-beat-fade mt-3"></i></a>
    </div>
  </Col>
  <Col md={6}>
    <p style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                  ,fontStyle:"normal",color:'black'}}>
                    Transist Alert Hub, a dynamic incident alerting system for transportation infrastructure. My full-stack project empowers users to report incidents impacting transportation while providing admins with powerful tools for incident management. With features like CRUD operations and profile customization, Here revolutionizing how communities respond to transportation challenges. Join here as we drive innovation and safety in transit!

                    <br />
                    <br />
                    Technologies Used : HTML,CSS,Bootstrap,JS,React, <br />MongoDB
                  </p>
  </Col>
</Row>
</Modal.Body>
</Modal>



    </div>
  )
}

export default Alert