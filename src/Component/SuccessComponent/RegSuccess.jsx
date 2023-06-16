import { BsFillCheckCircleFill } from "react-icons/bs";
import './style.success.css'
import { useNavigate } from 'react-router-dom';
import { AffiliateContext } from "../../Context/context";
import { useContext } from "react";







const RegSuccessBTN = ()=>{
    const navigate = useNavigate();
    const {isLoading, dispatch, successStatus} = useContext(AffiliateContext);



const handleNavigation = ()=>{
    dispatch({type:"IS_SUCCESS_STATUS_END"});
    navigate('/login');
    
}

    return(
        <>
            

                <div className="regSuccessDiv1 flexDisplayColumn boxShadow ">

                        <div className="regSuccessDiv2 boxShadow flexDisplayColumn ">
                        <BsFillCheckCircleFill className="customToolstyle secondaryTextColor2"/>

                            <p className="smallText mdMarginTop">Registeration successful, check your email for activation</p>

                                <button className="globalBTN mdMarginTop" onClick={handleNavigation}>
                                    Login
                            </button>
                        </div>

                </div>
        </>
    )
};


export default RegSuccessBTN