import React from 'react'
import cardInfo from '../../../util/DrInfo/UpcomingInfo';
import Card from '../../Card/Card';
export default function UpcomingSchedule() {

  return (
  <div style={{fontFamily:'Arial, sans-serif',margin:'5px'}}>
      <h2 style={{fontSize:'16px',padding:'10px',color:"rgb(40, 40, 91)"}}>The Upcoming Schedule</h2>
      {cardInfo.map((dayItem, index) => (
        <div key={index}>
          <h4 style={{color: '#888',fontSize:'12px',padding:'5px'}}>On {dayItem.day}</h4>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
            {dayItem.appointments.map((appointment, i) => (
              <Card key={i} data={appointment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
