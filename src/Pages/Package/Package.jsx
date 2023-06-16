import { useEffect, useState } from 'react';
import './style.package.css';



const Package = ()=>{

    const [linkURl, setLinkURL] = useState(false);
    const [action, setAction] = useState(false)




const triggerScript = ()=>{
    setAction(true)
}




    return (
        <>

            <div className='packageDiv' >
               <div >
               <h3 className='div2'>
                    Demo Package
                </h3>
                
                <button class="wtrvl-checkout_button" id="wetravel_button_widget" data-env="https://maximumimpacttravel.wetravel.com" data-version="v0.3" data-uid="62302" data-uuid="54806750" href="https://maximumimpacttravel.wetravel.com/checkout_embed?uuid=54806750" style={{backgroundColor:'black', color:'#ffffff', border: '0px', borderRadius: '5px', fontFamily: 'Poppins', cursor: 'pointer'}}
                    onClick={triggerScript}
                >Book Now</button>
               </div>
                
            </div>
        
        </>
    )
}


export default Package 