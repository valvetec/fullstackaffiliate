import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.registration.css";
import { useState } from "react";
import RegisterationComponent from "../../Component/Registeration/Registeration";
import axios from "axios";
import BASE_URL from "../../Hooks/Base_URL.";
import { AffiliateContext } from "../../Context/context";
import RegSuccessBTN from "../../Component/SuccessComponent/RegSuccess";









const RegistrationPage = () => {
  const [regDetails, setRegDetails] = useState({
    firstName: '',
    userName: '',
    lastName: '',
    country: '',
    password:'',
    confirmPassword: '',
    phoneNumber: '',
    email: ''
  });

  const {isLoading, dispatch, successStatus} = useContext(AffiliateContext);

 

  const handleSubmit = async(e) => {
    e.preventDefault();
    dispatch({type:"ISLOADING_START"});
    const data = {
      firstName: regDetails.firstName,
      userName: regDetails.userName,
      lastName: regDetails.lastName,
      country: regDetails.country,
      password: regDetails.password,
      phoneNumber: regDetails.phoneNumber,
      email: regDetails.email,
      confirmPassword: regDetails.confirmPassword
    }

    try {
      const res = await axios.post(`${BASE_URL}/createUsers`, data);

      console.log(res?.data)
      
      dispatch({type:"ISLOADING_END"});
      dispatch({type:"IS_SUCCESS_STATUS_START"});

     

    } catch (error) {
      dispatch({type:"ISLOADING_END"});
    }
  }

  







  return (

      <>
      
      {successStatus && 

        <RegSuccessBTN /> 
        }


    <div className={isLoading ? 'bgBlur regWrapper' : "regWrapper "}>
      <div className="flexDisplayRow registerDiv1">
  
        <div className="registerDiv3">
          <div className="mainContainer">


          <h2 className="pryFontHeaderFamily smMarginLeft secondaryTextColor textHeader  ">
            Sign Up
          </h2>


            <RegisterationComponent handleSubmit={handleSubmit} regDetails={regDetails} setRegDetails={setRegDetails}/>



          </div>
        </div>
      </div>
    </div>

      
      </>
  );
};

export default RegistrationPage;
