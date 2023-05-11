import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import ak1 from '../../Assets/ak1.jpg'

import ak from '../../Assets/ak.jpg'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={ak}
                isBlog={false}
                title="TudoFarm (E-commerce Application)"
                description="By erasing conventional time and geographic limitations,
                emerging technologies have reshaped the enterprise. The
                information revolution introduces a fresh produce
                marketing e-commerce application. The majority of
                individuals can purchase products online. E-commerce not
                only develops a new virtual community of buyers, sellers,
                and suppliers linked by the need for goods and services, but
                it also aids in increasing the effectiveness of agricultural
                products' distribution. Customers can utilise search engines
                
                to uncover thousands of similar websites by searching e-
                commerce websites. It not only lowers the cost of
                
                distribution but also makes it possible for agricultural
                products to be distributed faster, safer, more conveniently,
                
                and more effectively to a larger area."
                ghLink="http://tudofarm.epizy.com/project01/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={ak1}
                isBlog={false}
                title="Paper On AI-Based Gun Parts Detection"
                description="Nowadays, artificial intelligence (AI) is proving to be a game-changer with limitless applications in practically every field. It is now making its way into the production sector, enabling it to leverage the power of AI and so provide automation that is quicker, more precise, less expensive, and of higher quality. This article attempts to provide a quick overview of automated visual quality assessment and how using AI to implement it can save a lot of time and effort. These automated quality inspection applications typically apply deep learning, computer vision, and image processing (all of which are parts of AI)."
                ghLink="https://github.com/varunofficial001/MY-Works/blob/main/AI%20based%20gun%20parts%20ieee%20paper.docx.pdf"
              />
            </Col>

            

            


          
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist