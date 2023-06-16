import { createContext, useState, useEffect, useReducer, useRef} from "react";
import axios from 'axios';
import BASE_URL from "../Hooks/Base_URL.";
import Reducer from "./Reducer";




const INITIAL_STATE = {
    userInfo: JSON.parse(localStorage.getItem("userData")) || null,
    isLoading: false,
    cursorState: false,
    successStatus: false

};


export const AffiliateContext = createContext({});



export const AffiliatePorvider = ({children})=>{
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
    const [notificationText, setNotificationText] = useState(null)




    ///temp store user details on reg in localstorage
    useEffect(() => {
        localStorage.setItem("userData", JSON.stringify(state.userInfo, ));         
    }, [state.userInfo]);




    return (
       <AffiliateContext.Provider value={{userInfo: state.userInfo, isLoading: state.isLoading, dispatch, successStatus: state.successStatus,
        notificationText, setNotificationText
       }}>
            {children}
       </AffiliateContext.Provider>
    )
}