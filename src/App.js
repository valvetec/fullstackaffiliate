import HomePage from "./Pages/Home/Home";
import RegistrationPage from "./Pages/Registration/Registration"
import LoginPage from "./Pages/Login/Login";
import NavigationHeader from "./Component/Navigation/Navigation";
import UserDashBoard from "./Pages/UserDashBoard/UserDashBoard";
import LoadSpinner from "./Component/Loader/Loader";
import { useContext } from "react";
import { AffiliateContext } from "./Context/context";
import Products from "./Pages/Products/Products";
import BackgroundBlur from "./Component/Loader/BackgroundBlur";
import NotificationComponent from "./Component/Notifications/Notification";
import PaymentPage from "./Pages/Payment/Payment";





import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Sales from "./Pages/Sales/Sales";
import AffiliateDashboard from "./Pages/AffiliateDashboard/AffiliateDashboard";







function App() {
  const {isLoading, successStatus, notificationText} = useContext(AffiliateContext)

  console.log(notificationText, 'loading')



  return (
    <BrowserRouter>

      {isLoading && <LoadSpinner/>}

      {(isLoading || successStatus || notificationText) && <BackgroundBlur/>}

      {notificationText && <NotificationComponent/>}

        <NavigationHeader/>

        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/registration" element={<RegistrationPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/dash" element={<UserDashBoard/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/sales/:affiliateUser" element={<Sales />} />
        <Route path="/payment/:link/:linkId/:productId" element={<PaymentPage/>} />
        <Route path="/affiliate" element={<AffiliateDashboard/>} />

        </Routes>
       
    </BrowserRouter>
  );
}

export default App;