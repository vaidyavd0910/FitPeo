import React from 'react'
import cardInfo from '../../../util/DrInfo/DrInfo'
import Card from '../../card/card'
import { MdFace } from "react-icons/md";

export default function CalendarView() {
     const buttonStyle = {
    width: '30px',
    height: '30px',
    margin: '10px',
    fontSize: '24px',
    borderRadius: '8px',
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  };
  return (
    <>
        <div style={{ display: 'flex', justifyContent:'end' }}>
      <button style={{ ...buttonStyle, backgroundColor: 'rgb(33, 186, 233)', color: '#fff' }}>
            <MdFace/>
      </button>
      <button style={{ ...buttonStyle, backgroundColor: ' rgb(43, 43, 160)', color: '#fff' }}>
        +
      </button>
    </div>
        <div>
            calender
        </div>
        <div style={{display: 'flex', gap:'10px'}}>
            {cardInfo.map((item, index) => (
                <Card key={index} data={item} />
            ))}
        </div>
    </>
    
  )
}
