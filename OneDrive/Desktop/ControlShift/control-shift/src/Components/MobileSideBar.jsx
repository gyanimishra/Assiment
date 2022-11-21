import React from 'react'
import {Link} from 'react-router-dom'

const MobileSideBar = ({isSideBarActive,setIsSideBarActive}) => {   

    const arrayLinks = ["work","about","services","career","contact"]

    const generateMobileLinks = (arrayLinks) => {
        return (
            arrayLinks.map((link,index) => {
               return <Link to={link} key={index}>{link}</Link> 
            })
        )
    }

  return (
    <>
        <aside className={isSideBarActive?"":"d-none"}>
        <button className="close" onClick={() => setIsSideBarActive(!isSideBarActive)}>&times;</button>
        {generateMobileLinks(arrayLinks)}
    </aside>
    </>  
    )
}

export default MobileSideBar
