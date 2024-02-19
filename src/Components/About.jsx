import React from 'react'
import Tab from './Tab'


function About() {
  return (
  <>
    <div id='about' className="container">
        <div className="d-flex justify-content-center align-items-center">
            <div className="border shadow p-5">
                <h1 style={{fontFamily: "Anta,sans-serif", fontWeight: "400"
                            ,fontStyle:"normal"}} className='font text-center text-white'>ABOUT ME !
                </h1>
                <hr />
                <p style={{fontFamily: "Anta,sans-serif", fontWeight: "400"
        ,fontStyle:"normal",fontSize:'25PX'}} className="fw-light">I am a dedicated Full Stack Developer with a strong foundation in React and Angular. I honed my skills during an intensive ME(A)RN internship at Luminar Technolab, where I gained valuable experience in building dynamic web applications. I am passionate about leveraging technology to create innovative solutions and enhance user experiences. My goal is to continue learning and growing in the field of web development, contributing my skills to meaningful projects. </p>
                <div className="fs-4 mt-4">
                  <Tab/>
                </div>
            </div>
         </div>
    </div>
  </>
  )
}

export default About
