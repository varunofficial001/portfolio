import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'

function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Contact -Details</h2>
        <h4><b>Address</b></h4>
        <h5> no.1,chelliamman nagar, sevvapet,thiruvallur-602025 </h5>
        
        <h4><b>E-mail</b></h4>
        <h5>Sec20it128@sairamtap.edu.in</h5>
        
        <h4><b>Mobile</b></h4>
        <h5>8610762557</h5>
        
        <h4><b>Linkedin</b></h4>
        <a href='https://www.linkedin.com/in/varun-s-t-b35b5b205/'><b>https://www.linkedin.com/in/varun-s-t-b35b5b205/</b></a>
        
        <h4>GitHub</h4>
        <a href='https://github.com/varunofficial001'>https://github.com/varunofficial001</a>
        
        <button
          className='contactbtn'
          onClick={() => {
            window.open("https://www.linkedin.com/in/varun-s-t-b35b5b205/");
          }}
        >Say Hello</button>
        <span></span>
        <p className='copyright'>© Copyright 2023
        <hr />
        Designed & Built by <span>Varun ST</span></p>
      </Container>
    </div>
  )
}

export default Contactpage