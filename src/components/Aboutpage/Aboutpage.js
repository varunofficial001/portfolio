import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>
                            <h4><b>Education</b></h4>
                            <br></br>
<h5><b>B.TECH INFORMATION
TECHNOLOGY</b></h5>
<h6>Sri Sairam Engineering College</h6>
<h6>2020 – 2024 | Chennai, India</h6>
<h6>CGPA : 8.55</h6>
<br></br>
<h5><b>Angle Matric And Hr.Secondary
School</b></h5>
<h6>Higher Secondary School Certificate</h6>
<h6>2018 – 2020 | Thiruvallur, India</h6>
<h6>Percentage : 72%.</h6>
<br></br>
<h5><b>SMT.K.M.M.Vivekanadha Vidhyalaya</b></h5>
<h6>Secondary School Leaving Certificate</h6>
<h6>Chennai, india</h6>
<h6>Percentage : 78.40 %</h6></p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>C++</li>
                                    <li>C-programming</li>
                                </Col>
                                <Col md={5}>
                                    <li>React Js</li>
                                    <li>Sql</li>
                                    <li>Mongo DB</li>
                                    <li>PhotoShop</li>
                                    <li>Blender</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage