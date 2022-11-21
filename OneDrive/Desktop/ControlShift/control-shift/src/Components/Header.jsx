import React,{useState} from 'react'
import {Link,useLocation} from 'react-router-dom';
import {Container,Row,Col,Navbar,Button,Nav} from 'react-bootstrap';
import MobileSideBar from './MobileSideBar';
import HeaderConstruction from '../assets/Images/HeaderConstruction.png';
import Hiring from '../assets/Images/Hiring.png';
import Crayon from '../assets/Images/crayon.png';
import Career from '../assets/Images/career.png';


function Header() {

    // Data For Conditional Rendering 
    const DataForRendering = [
        {
            Main:"Hire Trusted Engineers in 48 hours!",
            SubMain:"Your long-term staffing and engineering partner",
            button:true,
            imageMain:HeaderConstruction,
            shadow:true
        },
        {
            Main:"We're on the hunt for talent",
            SubMain:"Join us from around the world on our mission to reinvent the way people build things in digitalSpace",
            imageMain:Hiring,
            shadow:true
        },
        {
            Main:"Still not Convinced?",
            SubMain:"We would love to woo you a little more.Get on a call with us and we'll make it worth your time",
            imageMain:Crayon,
            shadow:true
        },
        {
            Main:"Are you an individual looking for the right job roles",
            SubMain:"Scroll down to see the list",
            imageMain:Career,
            shadow:true
        }
    ]

    // State to toggle navbar
    const [isSideBarActive,setIsSideBarActive] = useState(false);
    const location = useLocation();

    // Method to check active Link

    const checkActiveLink = (name) => {
        if (location.pathname === name) {
            return "underline";
        }
        // Underline class Defined in Styles to put underline on active path link
    }

  return (
    <>
        <MobileSideBar isSideBarActive={isSideBarActive} setIsSideBarActive={setIsSideBarActive}/>
        <Container fluid className={(location.pathname==="/" || location.pathname === "/contact")?'header-background':""}>
        <Container>
            <Row>
                <Col className="text-left d-flex align-items-center justify-content-start">
                    LogoIpSum
                </Col>
                <Col xs={8} className="d-none d-md-block">
                    <Navbar className="d-flex align-items-center justify-content-center d-none d-md-flex">
                        <Nav className="d-flex gap-3 px-3">
                            <Link to="/"className={`${checkActiveLink("/")} nav-link`}>Work</Link>
                            <Link to="/about" className={`${checkActiveLink("/about")} nav-link`}>About</Link>
                            <Link to="/services" className={`${checkActiveLink("/services")} nav-link`}>Services</Link>
                            <Link to="/career" className={`${checkActiveLink("/career")} nav-link`}>Career</Link>
                            <Link to="/contact" className={`${checkActiveLink("/contact")} nav-link`}>Contact Us</Link>
                        </Nav>
                    </Navbar>
                </Col>
                <Col className="d-flex align-items-center justify-content-end">
                    {/* // Button Hire Us on Desktop */}
                    <Button variant='dark' className='text-white d-none d-md-block'>
                        Hire Us
                    </Button>
                    {/* Navbar Toggle Icon on Mobiles */}
                    <svg onClick={() => setIsSideBarActive(!isSideBarActive)} className='d-md-none' width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.799805 1.9999C0.799805 1.57556 0.968376 1.16859 1.26843 0.868532C1.56849 0.568474 1.97546 0.399902 2.3998 0.399902H21.5998C22.0242 0.399902 22.4311 0.568474 22.7312 0.868532C23.0312 1.16859 23.1998 1.57556 23.1998 1.9999C23.1998 2.42425 23.0312 2.83121 22.7312 3.13127C22.4311 3.43133 22.0242 3.5999 21.5998 3.5999H2.3998C1.97546 3.5999 1.56849 3.43133 1.26843 3.13127C0.968376 2.83121 0.799805 2.42425 0.799805 1.9999ZM0.799805 9.9999C0.799805 9.57556 0.968376 9.16859 1.26843 8.86853C1.56849 8.56847 1.97546 8.3999 2.3998 8.3999H21.5998C22.0242 8.3999 22.4311 8.56847 22.7312 8.86853C23.0312 9.16859 23.1998 9.57556 23.1998 9.9999C23.1998 10.4242 23.0312 10.8312 22.7312 11.1313C22.4311 11.4313 22.0242 11.5999 21.5998 11.5999H2.3998C1.97546 11.5999 1.56849 11.4313 1.26843 11.1313C0.968376 10.8312 0.799805 10.4242 0.799805 9.9999ZM10.3998 17.9999C10.3998 17.5756 10.5684 17.1686 10.8684 16.8685C11.1685 16.5685 11.5755 16.3999 11.9998 16.3999H21.5998C22.0242 16.3999 22.4311 16.5685 22.7312 16.8685C23.0312 17.1686 23.1998 17.5756 23.1998 17.9999C23.1998 18.4242 23.0312 18.8312 22.7312 19.1313C22.4311 19.4313 22.0242 19.5999 21.5998 19.5999H11.9998C11.5755 19.5999 11.1685 19.4313 10.8684 19.1313C10.5684 18.8312 10.3998 18.4242 10.3998 17.9999Z" fill="#333333"/>
                    </svg>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center mt-5'>
                <Col md={6} xs={12} className='d-flex align-items-start gap-3 justify-content-center flex-column'>
                    {location.pathname === "/" && <> <p className='header-para1'>{DataForRendering[0].Main}</p>
                    <p className='para-para'>{DataForRendering[0].SubMain}</p>
                    <Button variant='dark' className='text-white'>
                        Reach Out to Us</Button></>}

                    {location.pathname === '/career' && <> <div className='blur-effect1'></div>
                    <p className='header-para2'>{DataForRendering[1].Main} </p> 
                    <p className='para-para3'>{DataForRendering[1].SubMain}</p></>}

                    {location.pathname === '/contact' && <><p className='header-para3'>{DataForRendering[2].Main} </p> <p className='para-para2'>{DataForRendering[2].SubMain}</p></>}

                    {location.pathname === '/services' && <><div className='blur-effect'></div><p className='header-para4'>{DataForRendering[3].Main} </p> <p className='para-para3'>{DataForRendering[3].SubMain}</p></>}
                </Col>
                <Col md={6} sm={12} xs={location.pathname==="/contact" && {order:"second"}} className="image-container">
                 {location.pathname === "/" && <img src={location.pathname === "/" && HeaderConstruction} alt="" />}
                 {location.pathname === "/career" && <img src = {location.pathname === '/career'  && DataForRendering[1].imageMain}  alt=""/>}
                 {location.pathname === "/contact" && <img src={location.pathname === '/contact' && DataForRendering[2].imageMain}  alt=""/>}
                 {location.pathname === "/services" && <img src={location.pathname === '/services' && DataForRendering[3].imageMain}  alt=""/>}
                </Col>
            </Row>
        </Container>
        </Container>
    </>
  )
}

export default Header
