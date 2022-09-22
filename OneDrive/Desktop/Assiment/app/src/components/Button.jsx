import React from 'react'
import { useState } from 'react'
import './Button.css'
const Button = () => {
    const[ state,setstate] =useState(false);
    let obj1={
        width:"130px"
    }
  return (
    <div id='main'>

        <div className='first-btn'>
        <button style={state===1?obj1:{width:"90px"}} onClick={()=>{
            setstate((prev)=>prev===1?false:1)
        }}>Index1</button>
        <button style={state===2?obj1:{}} onClick={()=>{
            setstate((prev)=>prev===2?false:2)
        }}>Index2</button>

          <button style={state===3?obj1:{}} onClick={()=>{
            setstate((prev)=>prev===3?false:3)
        }}>Index3</button>
        
        </div>
       

       <div className='first-btn'>
       <button style={state===4?obj1:{}} onClick={()=>{
           setstate((prev)=>prev===4?false:4)
        }}>Index4</button>
          <button style={state===5?obj1:{}} onClick={()=>{
            setstate((prev)=>prev===5?false:5)
        }}>Index5</button>
          <button style={state===6?obj1:{}} onClick={()=>{
            setstate((prev)=>prev===6?false:6)
        }}>Index6</button>
       </div>
          
      
    </div>
  )
}

export default Button
