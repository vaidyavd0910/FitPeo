import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Card from './components/card/card'
import UpcomingSchedule from './components/DashboardMainContent/UpcomingSchedule/UpcomingSchedule'
import CalendarView from './components/DashboardMainContent/CalendarView/CalendarView'
import ActivityFeed from './components/DashboardMainContent/ActivityFeed/ActivityFeed'
import HealthStatusCards from './components/DashboardMainContent/DashboardOverview/HealthStatusCards/HealthStatusCards'
import DashboardOverview from './components/DashboardMainContent/DashboardOverview/DashboardOverview'

function App() {

  return (
    <>
    {/* <div style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>

      <Header/>
    </div>
    <Sidebar/>
    <Card/>
    <CalendarView/>
    <UpcomingSchedule/>
    <div style={{ width: '100%', maxWidth: '600px', margin: 'auto' }}><ActivityFeed/></div> */}
    <div style={{display:'flex'}}>
      <div style={{width:'18%'}}><Sidebar/></div>
      <div style={{width:'39%'}}>
      <DashboardOverview/>
      </div>
      <div style={{backgroundColor:' #f9fafd',width:'43%',padding:'0px'}}>
      <div style={{display:'flex', flexDirection:'column', padding:'15px'}}>
        <div>
          <CalendarView/>
        </div>
        <UpcomingSchedule/>
      </div>
      </div>
    </div>
    
    </>
  )
}

export default App
