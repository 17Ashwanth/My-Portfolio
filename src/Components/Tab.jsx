import React from 'react'
import { Tabs } from 'react-bootstrap';
import './Tab.css'
function Tab() {
  return (
    <div >
 <Tabs  justify variant='pills' className='text-white ' defaultActiveKey='tab-1'>
<Tab  className="mt-3"  eventKey='tab-2'   title=" SKILLS">
<div className="progress_bar">
                <div className="bar_container">
                    <h3>HTML</h3>
                    <span className='mt-4'>95%</span>
                    <div className="base_bar"></div>
                    <div className="base_bar html-bar"></div>
                </div>
                <hr />
                <div className="bar_container">
                    <h3>CSS</h3>
                    <span className='mt-4'>88%</span>
                    <div className="base_bar"></div>
                    <div className="base_bar css-bar"></div>
                </div>
                <hr />
                <div className="bar_container">
                    <h3>BOOTSTRAP</h3>
                    <span className='mt-4'>85%</span>
                    <div className="base_bar"></div>
                    <div className="base_bar bootstrap-bar"></div>
                </div>
                <hr />
                <div className="bar_container">
                    <h3>JAVASCRIPT</h3>
                    <span className='mt-4'>80%</span>
                    <div className="base_bar"></div>
                    <div className="base_bar js-bar"></div>
                </div>
                <hr />
                <div className="bar_container">
                    <h3>REACT</h3>
                    <span className='mt-4'>78%</span>
                    <div className="base_bar"></div>
                    <div className="base_bar react-bar"></div>
                </div>
                <hr />
                <div className="bar_container">
                    <h3>ANGULAR</h3>
                    <span className='mt-4'>70%</span>
                    <div className="base_bar"></div>
                    <div className="base_bar ang-bar"></div>
                </div>
                <hr />
                <div className="bar_container">
                    <h3>NODE JS</h3>
                    <span className='mt-4'>75%</span>
                    <div className="base_bar"></div>
                    <div className="base_bar node-bar"></div>
                </div>
                <hr />
                <div className="bar_container">
                    <h3>MONGODB</h3>
                    <span className='mt-4'>78%</span>
                    <div className="base_bar"></div>
                    <div className="base_bar db-bar"></div>
                </div>
                <hr />
</div>
</Tab>
<Tab eventKey='tab-1' title="EDUCATION">
<div className='mt-3'>
    <p style={{fontFamily: "Anta,sans-serif", fontWeight: "400"
        ,fontStyle:"normal",fontSize:'25PX'}}  className='mt-2  text-white'>Bachelor in Computer Application <br /><span style={{fontSize:'18PX'}} className='fw-light'>Concord Arts and Science College, Kannur</span> <br /> <span style={{fontSize:'18PX'}} className='fw-light'>Scored Grade A with Distinction</span> </p>
        <hr />
    <p style={{fontFamily: "Anta,sans-serif", fontWeight: "400"
        ,fontStyle:"normal",fontSize:'25PX'}}  className='mt-2  text-white'>+2 Computer Science <br /><span style={{fontSize:'18PX'}} className='fw-light'>Chembilode Higher Secondary School, Kannur</span> <br /> <span style={{fontSize:'18PX'}} className='fw-light'>Scored Grade A </span> </p>
        <hr />
    
    <p style={{fontFamily: "Anta,sans-serif", fontWeight: "400"
        ,fontStyle:"normal",fontSize:'25PX'}}  className='mt-2  text-white'> Class X  <br /><span style={{fontSize:'18PX'}} className='fw-light'>Kadambur Higher Secondary School, Kannur</span> </p>
        <hr />
</div>

</Tab>
<Tab  eventKey='tab-3' title="EXPERIENCE">
<div className='mt-3'>
    <p style={{fontFamily: "Anta,sans-serif", fontWeight: "400"
        ,fontStyle:"normal",fontSize:'25PX'}}  className='mt-2  text-white'> ME(A)RN Stack Developer Intern <br /><span style={{fontSize:'17PX'}} className='fw-light'>Luminar Technolab, Kakkanad, Cochin</span> <br /> <span style={{fontSize:'18PX'}} className='fw-light'>Duration 6 Months </span> </p>
</div>
    <hr />
</Tab>

 </Tabs>

    </div>
  )
}

export default Tab