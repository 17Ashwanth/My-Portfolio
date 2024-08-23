import React from 'react';
import './Home.css';

function Home() {
  return (
    <>
      <section id='home' className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <h1 style={{ fontFamily: "Anta, sans-serif", fontWeight: "800", fontStyle: "normal" }}  className="mb-2">I AM A <span className='text-primary'>ME(A)RN</span> STACK DEVELOPER</h1>
          <h3 style={{ fontFamily: "Anta, sans-serif", fontWeight: "500", fontStyle: "normal" }} >This is my Official Portfolio Website <br /> to Describe all Details and Work Experience <br /> in Web Development.</h3>
          <a href='https://drive.google.com/file/d/1ax-8734aM5tjrZRjC9q-uFBmXAMv3wXf/view?usp=drive_link' target='_blank'><button  className='btn btn-primary mt-2'>GET THE RESUME{" "}<i class="fa-solid fa-download fa-bounce"></i></button></a>
        </div>
      </section>
    </>
  );
}

export default Home;