import React from 'react';
import {Container,Row,Col} from "react-bootstrap";
import SpecificationImage from '../assets/Images/Specification.png';
import '../Screens/Styles/SpecificationRenderScreen.css';

const SpecificationRenderScreen = () => {
  return (
    <Container>
        <Row>
            <Col md={6} xs={12} className="d-flex">
                <Row>
                    <Col xs={12}>
                     <h1 className='specification-heading'>We are Control Shift</h1>
                     <p>Realigning the wheel by creating an impact</p>
                    </Col>
                    <Col>
                     <Row>
                        <Col xs={6}>
                            <h1 className='spec-heading'>2021</h1>
                            <p className='spec-little'> Started in</p>
                        </Col>
                        <Col xs={6}>
                            <h1 className='spec-heading'>1000+</h1>
                            <p className='spec-little'>No. of interviews</p>
                        </Col>
                     </Row>
                     <Row>
                        <Col xs={6}>
                            <h1 className='spec-heading'>10+</h1>
                            <p className='spec-little'>No.Of Customers</p>
                        </Col>
                        <Col xs={6}><h1 className='spec-heading'>80%</h1>
                            <p className='spec-little'>Growing at</p>
                        </Col> 
                     </Row>
                    </Col>
                </Row>
            </Col>
            <Col md={6} xs={12}>
                <img src={SpecificationImage} alt="" className='specification-render-image'/>
            </Col>
        </Row>
    </Container>
  )
}

export default SpecificationRenderScreen;
