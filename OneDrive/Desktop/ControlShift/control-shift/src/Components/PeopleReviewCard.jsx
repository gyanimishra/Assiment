import React from 'react';
import {Card} from 'react-bootstrap';
import '../Components/Styles/PeopleReviewCard.css'

const PeopleReviewCard = ({review}) => {
  return (
    <Card style={{width:"296px", height:"364px" ,backgroundColor:"#333333"}} className="mx-2">
        <Card.Body className="d-flex flex-column gap-3">
         <img src={review.image} alt="" className="peopleReviewCard"/>
            <Card.Title className='text-white'>
                {review.name}
            </Card.Title>
            <Card.Text style={{color:"#828282"}}>
                {review.Industry}
            </Card.Text>
            <Card.Text className="review-card-text">
                {review.Rev}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default PeopleReviewCard
