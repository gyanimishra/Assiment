import React from 'react'
import { Form,Col,Button,Row , Container , FloatingLabel} from 'react-bootstrap';
import Calendar from './Calendar'

const ContactForm = () => {
  return (
    <Container>
        <Row>
            <Col md={6}>
                <Calendar/>
            </Col>
            <Col md={6}>
            <Form as={Container}>
        <h1>Get In Touch</h1>
        <p>Fill up the form our team will get back to you within 24 Hours</p>
        <Row className='mb-3'>
            <Form.Group as={Col} md={6} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder='Input your first name in here'/>
            </Form.Group>
            <Form.Group as={Col} md={6} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder='Input your last name in here'/>
            </Form.Group>
        </Row>
            <Form.Group controlId="formGridEmail" className='mb-3'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder='Input your email address in here'/>
            </Form.Group>
            <Form.Group controlId='formCheckBoxes' className='mb-3'>
                <Form.Label>Categories</Form.Label>
               <div className='d-flex flex-wrap justify-content-space-between mb-3' style={{width:"100%"}}>
                <Form.Check
                label="Illustration"
                name="group1"
                type="radio"
                style={{width:"33%"}}
                />
                <Form.Check
                label="Web Design"
                name="group1"
                type="radio"
                style={{width:"33%"}}
                />
                <Form.Check
                label="Mobile Design"
                name="group1"
                type="radio"
                style={{width:"33%"}}
                />
               </div>
               <div className='d-flex flex-wrap justify-content-space-between' style={{width:"100%"}}>
                <Form.Check
                label="Development"
                name="group1"
                type="radio"
                style={{width:"33%"}}
                />
                <Form.Check
                label="Motion Graphic"
                name="group1"
                type="radio"
                style={{width:"33%"}}
                />
                <Form.Check
                label="Other"
                name="group1"
                type="radio"
                style={{width:"33%"}}
                />
               </div>
            </Form.Group>
            <Form.Group controlId='formGridMessages' className='mb-3'>
                <Form.Label>Messages</Form.Label>
                <FloatingLabel controlId='floatingtextarea2' label="Write your message in here">
                    <Form.Control
                    as="textarea"
                    placeholder='Write your message in here'
                    style={{height:"150px"}}
                    />
                </FloatingLabel>
            </Form.Group>
            <Button variant="dark" type="submit" className='text-center'>
                Send Message
            </Button>
    </Form>
    </Col>
        </Row>
   
    </Container>
  )
}

export default ContactForm
