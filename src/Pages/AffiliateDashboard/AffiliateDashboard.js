import './style.affiliatedashboard.css'
import React from 'react'
import AffiliateDashboardCard from '../../Component/AffiliateDashboardCard/AffiliateDashboardCard'
import Sidebar from '../../Component/Sidebar/Sidebar'

const AffiliateDashboard = () => {
  return (
    <div className='wrapper '>
  
    <div className='flexDisplayRow userDashDiv1'>
       <Sidebar/>
   
       <div className='userDashDiv2 mdMarginLeft lgMarginTop'>
         <AffiliateDashboardCard />
       </div>
   </div>
    
  </div>

  )
}

export default AffiliateDashboard