import axios from "axios";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BASE_URL from "../../Hooks/Base_URL.";
import { AffiliateContext } from "../../Context/context";


const PaymentPage = ()=>{
    const location = useLocation();
    const getPath = location.pathname
    const {isLoading, dispatch, successStatus, userInfo} = useContext(AffiliateContext);
    const path = getPath.split('/')[2];
    const getData = getPath.split('/')

    console.log(getData, 'get data')

 

    useEffect(()=>{
        const makePayment = async()=>{
            dispatch({type:"ISLOADING_START"});
            const data = {
                userId: userInfo?.id,
                linkId: getData[3],
                productId: getData[4],
            }
            


            try {
                const res = await axios.post(`${BASE_URL}/payment`, data);
                //dispatch({type:"ISLOADING_END"});
                
                window.location.replace(res?.data);
            } catch (error) {
                dispatch({type:"ISLOADING_END"});  
            }
        }

        makePayment()
    },[path])






    return(
        <>


        
        </>
    )
}


export default PaymentPage