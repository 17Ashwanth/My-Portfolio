import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Service() {
  return (
    <>
    <section style={{backgroundColor:'white'}} id='service'>
      <h1 style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                            ,fontStyle:"normal"}} className="text-center mt-4 text-dark">SERVICES</h1>
      <hr />
      <Container>
        <Row className>
          <Col className='mt-3' lg={4} md={6}>
             <div className='d-flex justify-content-center text-primary'> <i style={{fontSize:'100px'}} class="fa-brands fa-html5 fa-beat-fade "></i></div>
             <h2 style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                            ,fontStyle:"normal"}} className="text-center text-dark mt-2">FRONTEND</h2>
              <h3 style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                            ,fontStyle:"normal"}} className="text-center text-dark">HTML5, CSS, Bootstrap and JavaScript technologies</h3>
          </Col>
          <Col className='mt-3' lg={4} md={6}>
             <div className='d-flex justify-content-center'> <i style={{fontSize:'100px',color:'blue'}}  class="fa-brands fa-react fa-beat-fade"></i></div>
             <h2 style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                            ,fontStyle:"normal"}} className="text-center text-dark mt-2">MERN STACK</h2>
              <h3 style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                            ,fontStyle:"normal"}} className="text-center text-dark">React at the frontend, on the server side, Express.js (the framework of Node.js) and MongoDB as the database.</h3>
          </Col>
          <Col className='mt-3' lg={4} md={6}>
             <div className='d-flex justify-content-center text-primary'> <i style={{fontSize:'100px'}} class="fa-brands fa-angular fa-beat-fade"></i></div>
             <h2 style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                            ,fontStyle:"normal"}} className="text-center text-dark mt-2">MEAN STACK</h2>
              <h3 style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                            ,fontStyle:"normal"}} className="text-center text-dark">Angular at the frontend, on the server side, Express.js (the framework of Node.js) and MongoDB as the database</h3>
          </Col>
          <Col className='mt-3' lg={4} md={6}>
             <div className='d-flex justify-content-center'> <i style={{fontSize:'100px',color:'blue'}} class="fa-solid fa-laptop fa-beat-fade"></i></div>
             <h2 style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                            ,fontStyle:"normal"}} className="text-center text-dark mt-2">BASIC PROGRAMMING</h2>
              <h3 style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                            ,fontStyle:"normal"}} className="text-center text-dark">Basic programming languages such as C,C++ and Python</h3>
          </Col>
          <Col className='mt-3' lg={4} md={6}>
             <div className='d-flex justify-content-center text-primary'><i style={{fontSize:'100px'}}  class="fa-brands fa-github fa-beat-fade"></i></div>
             <h2 style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                            ,fontStyle:"normal"}} className="text-center text-dark mt-2">GITHUB</h2>
              <h3 style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                            ,fontStyle:"normal"}} className="text-center text-dark">Code hosting platform for version control and collaboration</h3>
          </Col>
          <Col className='mt-3' lg={4} md={6}>
             <div className='d-flex justify-content-center'> <i style={{fontSize:'100px',color:'blue'}}   class="fa-brands fa-microsoft fa-beat-fade"></i></div>
             <h2 style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                            ,fontStyle:"normal"}} className="text-center text-dark mt-2">MICROSOFT OFFICE WORD</h2>
              <h3 style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                            ,fontStyle:"normal"}} className="text-center text-dark"> Microsoft office Word for Creating Documents</h3>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Service