import { createContext, useState, useEffect} from "react";





export const GlobalUseContext = createContext({});




export const GlobalState = ({children})=>{
    
    const [loadAPI, setLoadAPI] = useState(false);
    const [regUser, setRegUser] = useState({});
    
   

    return(

        < GlobalUseContext.Provider value={{

             loadAPI, setLoadAPI, regUser, setRegUser
        }}>
        
            {children}
        
        
        </GlobalUseContext.Provider>


    )



}