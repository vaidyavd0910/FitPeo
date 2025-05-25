import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Card from './components/card/card'
import UpcomingSchedule from './components/DashboardMainContent/UpcomingSchedule/UpcomingSchedule'
import CalendarView from './components/DashboardMainContent/CalendarView/CalendarView'

function App() {

  return (
    <>
    {/* <div style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>

      <Header/>
    </div> */}
    <Sidebar/>
    <Card/>
    <CalendarView/>
    <UpcomingSchedule/>
    </>
  )
}

export default App
