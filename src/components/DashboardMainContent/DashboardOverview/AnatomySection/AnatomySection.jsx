import React from 'react'
import { BsPersonStanding } from "react-icons/bs";
import Body from '../../../../assets/body.jpg'

export default function AnatomySection() {
  return (
    <div style={{width:'300px',height:'230px', backgroundColor:'#f9fafd',padding:'20px', borderRadius:"10px"}}>
    <div style={{display:'flex',justifyContent:'center', alignItems:'center',}}>
        <img 
          src={Body} 
          alt="Body Anatomy" 
          style={{ width: '60%', height: '100%', objectFit: 'cover' }} 
        />
    </div>
        
    </div>
  )
}
