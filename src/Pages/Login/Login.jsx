
import { Link } from "react-router-dom";
import "./style.login.css";
import { useContext, useState } from "react";
import BASE_URL from "../../Hooks/Base_URL.";
import axios from "axios";
import { AffiliateContext } from "../../Context/context";






const LoginPage = () => {
  const {isLoading, dispatch, successStatus} = useContext(AffiliateContext);




  const [loginDetails, setLoginDetails] = useState({
   userName: '',
    password: '',

})

const handleSubmit = async (e)=>{
  e.preventDefault();
  dispatch({type:"ISLOADING_START"});
  try{
          
      const response = await axios.post(`${BASE_URL}/login`, {
        userName: loginDetails.userName,
        password: loginDetails.password,

        
  });


  dispatch({type:"ISLOADING_END"});
  dispatch({type:"LOG_SUCCESS", payload: response?.data});
   console.log(response.data)
    window.location = '/dash'
  
  } catch(err){
    dispatch({type:"ISLOADING_END"});
}
}



  return (
    <div className="Wrapper">
        <div className="loginDiv2 boxShadow">


            <h2 className="loginTextHeader pryFontHeaderFamily smMarginLeft secondaryTextColor textHeader smMarginTop">
              Login
            </h2>



            <form className="loginForm smMarginTop" onSubmit={handleSubmit}>
              <div className="loginFormDiv mdMarginTop">
                <label className="loginLabel registerLabel pryFontHeaderFamily secondaryTextColor smallText">User Name</label>
                <input type="text" className="loginInput registerLabel pryFontHeaderFamily smallText" placeholder="Enter Password" onChange={e  => setLoginDetails({...loginDetails, userName: e.target.value })}  />
              </div>
              <div className="loginFormDiv smMarginTop">
                <label className="loginLabel registerLabel pryFontHeaderFamily secondaryTextColor smallText">Password</label>
                <input type="password" className="loginInput registerLabel pryFontHeaderFamily smallText" placeholder="Enter password" onChange={e  => setLoginDetails({...loginDetails, password: e.target.value })} />
              </div>

              <div className="loginDiv3 mdMarginTop">
              <input type="checkbox" />
              <h5 className="loginTxt pryFontHeaderFamily secondaryTextColor baseText">
                Show Password
              </h5>
            </div>

            <div>
             <button type="submit" className="globalBTN lgMarginTop loginBtn">Sign in</button>
             </div>

            </form>
          

            <div className="loginDiv4 mdMarginTop">
              <h5 className="pryFontHeaderFamily secondaryTextColor baseText mdMarginTop">
                Forget Username / Password?
              </h5>
              <h5 className="pryFontHeaderFamily secondaryTextColor baseText mdMarginTop">
                Dont have an account?{" "}
                <Link className="link" to="/registration">
                  <span className="pryFontHeaderFamily baseText primaryTextColor">
                    Sign up
                  </span>
                </Link>
              </h5>
          </div>
        </div>
      </div>
   
  );
};

export default LoginPage;
