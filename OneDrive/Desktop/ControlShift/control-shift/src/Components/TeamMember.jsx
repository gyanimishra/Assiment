import React from 'react';
import {Card} from 'react-bootstrap'

const TeamMember = ({details}) => {
  return (
    <>
        <Card style={{width:"18rem"}} className="mx-3">
            <Card.Img variant="top" src={details.image}>
            </Card.Img>
            <Card.Body className="d-flex flex-column gap-3">
                <Card.Title>{details.name}</Card.Title>
                <Card.Subtitle>{details.designation}</Card.Subtitle>
                <Card.Text>{details.desc}</Card.Text>
            </Card.Body>
        </Card>
    </>
  )
}

export default TeamMember
