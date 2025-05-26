import React from 'react'
import AnatomySection from './AnatomySection/AnatomySection'
import HealthStatusCards from './HealthStatusCards/HealthStatusCards'
import medicalRecordsData from '../../../util/MedicalRecordsData/MedicalRecordsData'
import Header from '../../Header/Header'
import ActivityFeed from '../ActivityFeed/ActivityFeed'

export default function DashboardOverview() {
  return (
    <>
    <div style={{padding:'15px 0px',}}><Header/></div>
    <h3 style={{fontFamily:'Arial, sans-serif', color:' rgb(40, 40, 91)'}}>Dashboard</h3>
    <div style={{display:'flex',gap:'25px'}}>
        <AnatomySection/>
          <div style={{display:'flex', flexDirection:'column', gap:'10px',padding: '5px'}}>
            {medicalRecordsData.map((record, index) => (
            <HealthStatusCards key={index} data={record}/>
              ))}
            </div>
    </div>
    <div style={{paddingTop:'15px',margin: '0px 20px 10px 0px'}}><ActivityFeed/></div>
    </>
   
  )
}