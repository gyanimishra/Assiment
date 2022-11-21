import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import AboveFooter from '../assets/Images/AboveFooter.png';
import "./Styles/AboveFooterScreen.css";

const AboveFooterScreen = () => {
  return (
    <Container fluid className='background-above'>
        <Container>
            <Row>
                <Col md={8} xs={12} className="d-flex flex-column justify-content-center">
                    <h1 className='above-heading'>Empathy Towards People,Customers and environment</h1>
                    <p>We are remote, we grow trees and we love to help animal shelters</p>
                </Col>
                <Col md={4} xs={12}>
                    <img src={AboveFooter} alt=""></img>
                </Col>
            </Row>
        </Container>
        </Container>
  )
}

export default AboveFooterScreen
