import React , {useRef,useEffect,useState} from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import PeopleReviewCard from '../Components/PeopleReviewCard';
import './Styles/PeopleReviewRenderScreen.css';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import PeopleReviewImage1 from '../assets/Images/PeopleReview1.png';
import PeopleReviewImage2 from '../assets/Images/PeopleReview2.png';
import PeopleReviewImage3 from '../assets/Images/PeopleReview3.png';


const peopleReviewCardData = [
  {
      image:PeopleReviewImage1,
      name:"Auriga",
      Industry:"R&D and IT",
      Rev:"Im so grateful to have found ControlShiftThe team really showed great initiative,and helped me with every question I had ControlShift truly cares and focuses on setting your company up for success",
  },
  {
    image:PeopleReviewImage2,
    name:"Moolya",
    Industry:"IT & Testing",
    Rev:"Im so grateful to have found ControlShiftThe team really showed great initiative,and helped me with every question I had ControlShift truly cares and focuses on setting your company up for success",
  },
  {
    image:PeopleReviewImage3,
    name:"Super Sound",
    Industry:"R&D and IT",
    Rev:"Im so grateful to have found ControlShiftThe team really showed great initiative,and helped me with every question I had ControlShift truly cares and focuses on setting your company up for success",
  },
  {
    image:PeopleReviewImage2,
    name:"Moolya",
    Industry:"IT & Testing",
    Rev:"Im so grateful to have found ControlShiftThe team really showed great initiative,and helped me with every question I had ControlShift truly cares and focuses on setting your company up for success",
  },

]


const PeopleReviewRenderScreen = () => {
  const [mount,setMount] = useState(false);
  const leftArrowEl = useRef();
  const rightArrowEl = useRef();
  
  // Force remounting of the component 
  useEffect(() => {
    if(!mount) {
      setMount(true)
    }
  },[]);

  return (
    <>
      <Container>
        <Row>
          <Col md={6} xs={12}>
            <h1 className='people-review-title'>What Are People Saying About Us</h1>
            <p className='people-review-desc'>Our core values are at the heart of all we do. They are integrated
              into our daily work lives and help us to  remember our clients
              always comes first, the last thankyou should always come from us.</p>
              {/* // Buttons For Scrolling of the carousel */}
          <Button
          type="button"
          variant='dark'
          className='mx-4 py-2'
          ref={leftArrowEl}
         >
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M7.24827 11.6484C7.47323 11.4234 7.59961 11.1182 7.59961 10.8C7.59961 10.4818 7.47323 10.1767 7.24827 9.95162L3.29667 6.00002L7.24827 2.04842C7.46686 1.8221 7.58781 1.51898 7.58507 1.20434C7.58234 0.889707 7.45614 0.588732 7.23365 0.366243C7.01116 0.143753 6.71018 0.01755 6.39555 0.0148159C6.08091 0.0120818 5.77779 0.133036 5.55147 0.351625L0.751466 5.15162C0.526501 5.37666 0.400123 5.68183 0.400123 6.00002C0.400123 6.31822 0.526501 6.62339 0.751466 6.84842L5.55147 11.6484C5.7765 11.8734 6.08167 11.9998 6.39987 11.9998C6.71806 11.9998 7.02323 11.8734 7.24827 11.6484Z" fill="#333333"/>
          </svg>
         </Button>
          <Button
          type="button"
          variant='light'
          className='py-2'
          ref={rightArrowEl}
         >
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.751735 11.6484C0.526769 11.4234 0.400391 11.1182 0.400391 10.8C0.400391 10.4818 0.526769 10.1767 0.751735 9.95162L4.70333 6.00002L0.751735 2.04842C0.533145 1.8221 0.412191 1.51898 0.414925 1.20434C0.417659 0.889707 0.543862 0.588732 0.766352 0.366243C0.988842 0.143753 1.28982 0.01755 1.60445 0.0148159C1.91909 0.0120818 2.22221 0.133036 2.44853 0.351625L7.24853 5.15162C7.4735 5.37666 7.59988 5.68183 7.59988 6.00002C7.59988 6.31822 7.4735 6.62339 7.24853 6.84842L2.44853 11.6484C2.2235 11.8734 1.91833 11.9998 1.60013 11.9998C1.28194 11.9998 0.976768 11.8734 0.751735 11.6484Z" fill="#F2C94C"/>
          </svg>
         </Button>
          </Col>
          <Col md={6} xs={12} className="d-flex gap-3">
          <Glider
          className="glider-container"
          draggable
          slidesToShow={1}
          hasArrows
          slidesToScroll={1}
          arrows={{
            prev: leftArrowEl.current,
            next: rightArrowEl.current,
          }}
          responsive={[
            {
              breakpoint:1300,
              settings: {
                slidesToShow:2.5,
                slidesToScroll:1,
                itemWidth: 150,
                duration: 0.25,
              }
            }
          ]}
          >
           {peopleReviewCardData.map((review,index) => {
            return <PeopleReviewCard key={index} review={review}/>
           })}
          </Glider>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PeopleReviewRenderScreen
