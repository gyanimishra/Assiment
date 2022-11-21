import React from 'react'
import {Card,Container} from 'react-bootstrap'

const BenefitReviewCard = ({benefit}) => {
  return (
    <>
        <Card style={{width:"390px",backgroundColor:"#FFDA78"}}>
            <Container className='p-2'>
                <span className='benefitIcon'>
                    <img src={benefit.image} alt="" />
                </span>
                <Card.Body>
                    <Card.Title className="Title">{benefit.Title}</Card.Title>
                    <ul>
                    {benefit.Specs.map((spec,index) => {
                        return <li key={index}>{spec}</li>
                    })}
                        
                    </ul>
                </Card.Body>
            </Container>
        </Card>
    </>
  )
}

export default BenefitReviewCard
