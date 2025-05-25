import React from 'react'
import Card from '../../card/card';
import cardInfo from '../../../util/DrInfo/UpcomingInfo';

export default function UpcomingSchedule() {

  return (
  <div>
      <h2>The Upcoming Schedule</h2>
      {cardInfo.map((dayItem, index) => (
        <div key={index}>
          <h4 style={{color: '#888'}}>On {dayItem.day}</h4>
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
