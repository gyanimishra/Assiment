import React from 'react';
import {Container,Row,Col,Nav} from 'react-bootstrap';




const Footer = () => {

  let socialLinksArray = ["Dribble","Behance","Instagram","Twitter"];
  let otherLinksArray = ["Work","About","Service","Contact Us"];

  const generateFooterLinks = (array) => {
    return (
      <>
        {array.map((content,index) => {
          return (
            <Nav.Item key={index}>
                <Nav.Link href="#home" className="text-white">{content}</Nav.Link>
            </Nav.Item>
          )
        })}
      </>
    )
  }

  return (
    <footer className='footer p-4'>
    <Container>
      <Row className='d-flex flex-wrap justify-content-md-start justify-content-sm-center'>
        <Col md={6} sm={12}>
           <h1 className='text-md-start text-sm-center mx-2'>Control Shift</h1>
           <Nav className='d-flex justify-content-md-start justify-content-sm-center'>
              {generateFooterLinks(socialLinksArray)}
           </Nav>
        </Col>
        <Col md={6} sm={12} className=" d-flex flex-column justify-content-sm-center gap-3">
           <Nav className="d-flex justify-content-md-end justify-content-sm-center">
              {generateFooterLinks(otherLinksArray)}
           </Nav>
           <p className='text-md-end text-sm-center copy-right'>CopyRight Control Shift &copy; All Rights Reserved 2022</p>
        </Col>
      </Row>
    </Container>
    </footer>
  )
}

export default Footer
