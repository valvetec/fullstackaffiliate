import "./style.tools.css"
import React, { useContext } from 'react';
import {MdOutlineLocalOffer, MdAttachMoney} from 'react-icons/md';
import {BsGraphDown} from 'react-icons/bs';
import {AiOutlineSetting} from 'react-icons/ai';
import axios from "axios";
import BASE_URL from "../../Hooks/Base_URL.";
import { AffiliateContext } from "../../Context/context";
import { Link } from "react-router-dom";









const Tools = () => {

const {isLoading, dispatch, successStatus} = useContext(AffiliateContext);













  return (
   <div className="wrapper mdMarginTop">
    <div className="mainContainer">
    <div className="toolDiv1 lgMarginTop lgMarginBottom ">
        <h2 className="pryFontHeaderFamily secondaryTextColor lgTextHeader lgMarginTop {">Dashboard</h2>
       
    </div>

    <div className="toolDiv2">

        <div className="toolDiv3 mdMarginBottom">

        <div className="toolDiv4 boxShadow">
                <MdOutlineLocalOffer className="toolIcon"/>
                <h3 className="toolTxt1 smMarginTop  pryFontHeaderFamily secondaryTextColor mediumText">Offers</h3>
                <p className="toolTxt2 pryFontHeaderFamily secondaryTextColor smallText smMarginTop">set up emails that deliverd atomatically to your affillates</p>
                <Link className="link" to={'/products'}>
                <button className="globalBTN lgMarginTop" >Get Started</button>
                </Link>
            </div>


            <div className="toolDiv4 boxShadow lgMarginLeft">
                <BsGraphDown className="toolIcon"/>
                <h3 className="toolTxt1 smMarginTop  pryFontHeaderFamily secondaryTextColor mediumText">Stats</h3>
                <p className="toolTxt2 pryFontHeaderFamily secondaryTextColor smallText smMarginTop">set up emails that deliverd atomatically to your affillates</p>
                <button className="globalBTN lgMarginTop">Get Started</button>
            </div>

        </div>


        <div className="toolDiv3 lgMarginTop mdMarginBottom">

            <div className="toolDiv4 boxShadow">
                <MdAttachMoney className="toolIcon"/>
                <h3 className="toolTxt1 smMarginTop pryFontHeaderFamily secondaryTextColor mediumText">Earning</h3>
                <p className="toolTxt2 pryFontHeaderFamily secondaryTextColor smallText smMarginTop">set up emails that deliverd atomatically to your affillates</p>
                <Link className="link" to={'/affiliate'}>
                <button className="globalBTN lgMarginTop">Get Started</button>
                </Link>
            </div>


            <div className="toolDiv4 boxShadow lgMarginLeft">
                <AiOutlineSetting className="toolIcon"/>
                <h3 className="toolTxt1 smMarginTop  pryFontHeaderFamily secondaryTextColor mediumText">Settings</h3>
                <p className="toolTxt2 pryFontHeaderFamily secondaryTextColor smallText">set up emails that deliverd atomatically to your affillates</p>
                <button className="globalBTN lgMarginTop">Get started</button>
            </div>
            
        </div>


    </div>
    </div>
   </div>
  )
}

export default Tools