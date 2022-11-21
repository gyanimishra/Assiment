import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import BenefitReviewCard from '../Components/BenefitReviewCard';
import './Styles/BenefitRenderScreen.css'
import Vector1Image from '../assets/Images/Vector1.png';
import Vector2Image from '../assets/Images/Vector2.png';
import Vector3Image from '../assets/Images/Vector3.png';


const benefitReviewsData = [
    {
        id:1,
        image:Vector1Image,
        Title:"Staffing Engineers",
        Specs:['Shortlisted and experienced candidates','Tailored interviews and assesments','Domain experience mapping','Consulting','Quick onboarding']
    },
    {
        id:2,
        image:Vector2Image,
        Title:"Software Development",
        Specs:['Complete ownership','Subject matter experts','Complete visibility','Implementation transparency','Support for re-engineering']
    },
    {
        id:3,
        image:Vector3Image,
        Title:"No-code and low code",
        Specs:['Highly skilled Engineers','Variety of tools and support','Outsource or hire specialists','Future proof','Support and Maintenance']
    }
]



const BenefitRenderScreen = () => {
  return (
    <Container className='my-4' id='Benefit-main-container'>
        <Row className='mb-5'>
            <Col>
                <h1 className='benefitTitle'>The Benefits of hiring us</h1>
                <p className='benefitPara'>We will help a client's problems to develop
                the products they have with high quality</p>
            </Col>
        </Row>
        <Row>
            <Col className='justify-content-center gap-3 align-items-center' id='Benefit-card'>
                {benefitReviewsData.map((benefit) => {
                    return <BenefitReviewCard key={benefit.id} benefit={benefit}/>
                })}
               
            </Col>
        </Row>
    </Container>
  )
}

export default BenefitRenderScreen
