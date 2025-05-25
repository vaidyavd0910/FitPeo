import React from 'react'
import cardInfo from '../../../util/DrInfo/DrInfo'
import Card from '../../card/card'

export default function CalendarView() {
  return (
    <div style={{display: 'flex', gap:'10px'}}>
      {cardInfo.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  )
}
