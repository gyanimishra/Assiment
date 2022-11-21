import React,{Fragment} from 'react'
import '././Styles/EngeeneringExpertise.css'
import crayonwelcome from '../assets/Images/crayonwelcome.png'

//import frontend image
import front1 from '../assets/Images/front1.png'
import front2 from '../assets/Images/front2.png'
import front4 from '../assets/Images/front4.png'
import front3 from '../assets/Images/front3.png'
import front5 from '../assets/Images/front5.png'
import front6 from '../assets/Images/front6.png'

//import backend image
import back1 from '../assets/Images/back1.png'
import back2 from '../assets/Images/back2.png'
import back3 from '../assets/Images/back3.png'


let frontendimagedata=[
    {
        image:front1
    },
    {
        image:front2
    },
    {
        image:front3
    },
    {
        image:front4
    },
    {
        image:front5
    },
    {
        image:front6
    },
]
let backendimagedata=[
    {
        image:back1
    },
    {
        image:back2
    },
    {
        image:back3
    },
  
]




const EngeeneringExpertise = () => {
  return (
    <Fragment>
        <div className="expertise-main-container">

            <div className="expertise-main-container-image">
                <img src={crayonwelcome} alt="crayonwelcome" />

            </div>


            <div className="expertise-main-container-content">

                <div className="expertise-main-container-content-heading">
                    <span>Engineers expertise</span>
                </div>
                <div className="expertise-main-container-content-para">
                    <span>Discover a pool of web technologies</span>
                </div>

                <div className="expertise-main-container-content-frontend-main">

                    <span className="expertise-main-container-content-frontend-heading">Front-end</span>

                    <div className="expertise-main-container-content-frontend-image">

                        {
                            frontendimagedata.map((ele)=>(
                                <div className="expertise-main-container-frontend-grey-box">
                                    <img src={ele.image} alt="" />
                                </div>
                            ))
                        }

                    </div>

                </div>

                {/* backend image */}


                <div className="expertise-main-container-content-backend-main">

                   <span className="expertise-main-container-content-frontend-heading">Back-end</span>

                        <div className="expertise-main-container-content-frontend-image">

    {
        backendimagedata.map((ele)=>(
            <div className="expertise-main-container-frontend-grey-box">
                <img src={ele.image} alt="" />
            </div>
        ))
    }

</div>

</div>

            </div>

        </div>
      
    </Fragment>
  )
}

export default EngeeneringExpertise
