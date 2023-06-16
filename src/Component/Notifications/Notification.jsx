import { useContext } from "react";
import { AffiliateContext } from "../../Context/context";
import './style.notification.css'



const NotificationComponent = ()=>{
    const {isLoading, dispatch, successStatus,  notificationText, setNotificationText} = useContext(AffiliateContext);

   


    return(
        <>

            <div className="notificationMainDiv boxShadow flexDisplayColumn">
                <h3 className="smallerText whiteTextColor textFontFamily">{notificationText}</h3>    
            </div>
        </>
    )
}


export default NotificationComponent