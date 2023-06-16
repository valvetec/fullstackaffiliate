
import Sidebar from '../../Component/Sidebar/Sidebar'
import Tools from '../../Component/Tools/Tools'
import './style.userdashboard.css'

const UserDashBoard = () => {
  return (
   <div className='wrapper '>
  
     <div className='flexDisplayRow userDashDiv1'>
        <Sidebar/>
    
        <div className='userDashDiv2 boxShadow mdMarginLeft lgMarginTop'>
          <Tools />
        </div>
    </div>
     
   </div>
 

  )
}

export default UserDashBoard