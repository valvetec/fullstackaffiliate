import { useState } from "react";
import { Link } from "react-router-dom";





const RegisterationComponent = ({handleSubmit, regDetails, setRegDetails})=>{
   





    return(
        <>

<form className="registerFormDiv mdMarginTop" onSubmit={handleSubmit}>
            <div className="registerForm mdMarginTop">
            <label className="registerLabel pryFontHeaderFamily secondaryTextColor smallText">First Name</label>
            <input className="registerInput pryFontHeaderFamily secondaryTextColor baseText" placeholder="First Name.." onChange={e  => setRegDetails({...regDetails, firstName: e.target.value })} />
            </div>
            <div className="registerForm mdMarginTop">
            <label className="registerLabel pryFontHeaderFamily secondaryTextColor smallText">Last Name</label>
            <input type="text" className="registerInput pryFontHeaderFamily secondaryTextColor baseText" placeholder="Last Name.." onChange={e  => setRegDetails({...regDetails, lastName: e.target.value })} />
            </div>
            <div className="registerForm mdMarginTop">
           <label className="registerLabel pryFontHeaderFamily secondaryTextColor smallText">Email</label>
           <input type="email" className="registerInput pryFontHeaderFamily secondaryTextColor baseText" placeholder="Email address.." onChange={e  => setRegDetails({...regDetails, email: e.target.value })} />
           </div>
           <div className="registerForm mdMarginTop">
            <label className="registerLabel pryFontHeaderFamily secondaryTextColor smallText">Username</label>
            <input type="text" className="registerInput pryFontHeaderFamily secondaryTextColor baseText " placeholder="Username.." onChange={e  => setRegDetails({...regDetails, userName: e.target.value })}/>
            </div>
            <div className="registerForm mdMarginTop">
            <label className="registerLabel pryFontHeaderFamily secondaryTextColor smallText">Country</label>
            <input type="text" className="registerInput pryFontHeaderFamily secondaryTextColor baseText" placeholder="Country.." onChange={e  => setRegDetails({...regDetails, country: e.target.value })}/>
            </div>
            <div className="registerForm mdMarginTop">
            <label className="registerLabel pryFontHeaderFamily secondaryTextColor smallText">Phone No</label>
            <input type="tel" className="registerInput pryFontHeaderFamily secondaryTextColor baseText" placeholder="09068******" onChange={e  => setRegDetails({...regDetails, phoneNumber: e.target.value })} />
            </div>
            <div className="registerForm mdMarginTop">
            <label className="registerLabel pryFontHeaderFamily secondaryTextColor smallText">Password</label>
            <input type="password" className="registerInput pryFontHeaderFamily secondaryTextColor baseText" placeholder="**********" onChange={e  => setRegDetails({...regDetails, password: e.target.value })} />
            </div>
            <div className="registerForm mdMarginTop">
            <label className="registerLabel pryFontHeaderFamily secondaryTextColor smallText">Repeat Password</label>
            <input type="password" className="registerInput pryFontHeaderFamily secondaryTextColor baseText" placeholder="**********" onChange={e  => setRegDetails({...regDetails, confirmPassword: e.target.value })}/>
            </div>

            <div className="registerDiv4 mdMarginTop mdMarginLeft">
          <input type="checkbox" />
            <h5 className="pryFontHeaderFamily secondaryTextColor baseText smMarginLeft"> I agree to the Terms of User</h5>
          </div>

          <div className="registerDiv5 mdMarginTop mdMarginBottom">

            <button type="submit" className="globalBTN lgMarginTop">Sign Up</button>


            <h6 className="registerTexth6 pryFontHeaderFamily secondaryTextColor baseText mdMarginTop">
              Already have an account?{" "}
              <Link className="link" to="/login">
                <span className="pryFontHeaderFamily baseText primaryTextColor">Sign In</span>
              </Link>
            </h6>

          </div>
          
          </form>

          
        
        </>
    )
}


export default RegisterationComponent