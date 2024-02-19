import React from 'react'
import {  Col, Container, Row} from 'react-bootstrap'
import Nesto from './Nesto';
import Alert from './Alert';
import Calc from './Calc';
import Weather from './Weather';
import Travel from './Travel';
import Food from './Food';



function Projects() {
  return (
    <>
    <section id='project'>
      <h1 style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                            ,fontStyle:"normal"}} className="text-center mt-4">PROJECTS</h1>
      <hr />
      <Container>
        <Row>
          <Col className='mt-2' lg={4}>
            <Nesto/>
          </Col>
          <Col className='mt-2' lg={4}>
            <Alert/>
          </Col>
          <Col className='mt-2' lg={4}>
            <Calc/>
          </Col>
          <Col className='mt-2' lg={4}>
            <Weather/>
          </Col>
          <Col className='mt-2' lg={4}>
            <Travel/>
          </Col>
          <Col className='mt-2' lg={4}>
            <Food/>
          </Col>
        </Row>
      </Container>
      </section>
    </>
  )
}

export default Projects