import React from "react";
import { Col, Row } from "react-bootstrap";

function Footer() {
  return (
    <div>

      <section id="contact">
        <div className="mt-4" style={{ minHeight: "300px",backgroundColor:'white',overflowX: 'hidden' }}>
        <h1 className="text-center" style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                    ,fontStyle:"normal",color:'black'}}>CONTACT ME !</h1>
          <Row style={{minHeight:'100%'}}>
            <Col lg={6} md={12} sm={12} className="d-flex justify-content-center align-itemms-center">
              {" "}
              <div style={{marginTop:'85px'}} >
                <h4 style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                    ,fontStyle:"normal",color:'black'}} className="text-center text-dark">Don't Be Shy!</h4>
                <p style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                    ,fontStyle:"normal",color:'black'}} className="mt-0 text-center text-dark">Get In Touch And Feel Free To Ask!  </p>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
           <Row  style={{marginTop:'90px'}}>
                <Col className="mt-3 mb-2 d-flex justify-content-center" lg={3} md={6} sm={12} ><a title="Linkdin" target="__blank" href="https://www.linkedin.com/in/ashwanth17/"> <i class="fa-brands fa-linkedin fa-2xl fa-bounce text-primary"></i></a></Col>
                <Col className="mt-3 mb-2 d-flex justify-content-center" lg={3} md={6}  sm={12}><a title="Github" target="__blank" href="https://github.com/17Ashwanth"><i  class="fa-brands fa-github fa-2xl fa-bounce text-primary"></i></a></Col>
                <Col  className="mt-3 mb-2 d-flex justify-content-center" lg={3}  md={6} sm={12} ><a title="Whatsapp" target="__blank" href=" https://wa.me/918157905969"><i  class="fa-brands fa-whatsapp fa-2xl fa-bounce text-primary"></i></a></Col>
                <Col  className="mt-3  d-flex justify-content-center" lg={3}  md={6}  sm={12}><a title="Mail" target="__blank" href="mailto:ashwanthcheleri@gmail.com "><i  class="fa-brands fa-at fa-2xl fa-bounce text-primary"></i></a></Col>
           </Row>
  
              
                
                
            </Col>
          </Row>
          <div className="mt-5">
                     <p style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                    ,fontStyle:"normal",color:'black'}} class="text-center mb-1 fs-6 opacity-100">Developed with dedication by Ashwanth C</p>
              <p style={{fontFamily: "Anta,sans-serif", fontWeight: "800"
                    ,fontStyle:"normal",color:'black'}} class="text-center">All rights reserved © 2024 </p>
     
          </div>
  
        </div>
      </section>
    </div>
  );
}

export default Footer;