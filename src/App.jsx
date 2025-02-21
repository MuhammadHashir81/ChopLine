import { useState } from 'react'
import FirstPage from './Components/FirstPage'
import SmartCheckIn from './Components/SmartCheckIn'
import CustomiseToYourNeeds from './Components/CustomiseToYourNeeds'
import Plan from './Components/Plan'
import Sponsors from './Components/Sponsors'
import ClientsReviews from './Components/ClientsReviews'
import Footer from './Components/Footer'
import QueueManagement from './Components/QueueManagement'
import Benefits from './Components/Benefits'
import FreeTrial from './Components/FreeTrial'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className='min-h-screen'>
    <div>
      <FirstPage />
      <SmartCheckIn />
      <QueueManagement />
      <Benefits />
      <CustomiseToYourNeeds />
      <Plan />
      {/* <FreeTrial /> */}
      {/* <ClientsReviews /> */}
      {/* <Sponsors /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
