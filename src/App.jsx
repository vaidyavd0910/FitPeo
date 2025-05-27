
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import UpcomingSchedule from './components/DashboardMainContent/UpcomingSchedule/UpcomingSchedule'
import CalendarView from './components/DashboardMainContent/CalendarView/CalendarView'
import ActivityFeed from './components/DashboardMainContent/ActivityFeed/ActivityFeed'
import HealthStatusCards from './components/DashboardMainContent/DashboardOverview/HealthStatusCards/HealthStatusCards'
import DashboardOverview from './components/DashboardMainContent/DashboardOverview/DashboardOverview'

function App() {

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="overview">
          <DashboardOverview />
        </div>
        <div className="rightPanel">
          <div className="rightContent">
            <div>
              <CalendarView />
            </div>
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
