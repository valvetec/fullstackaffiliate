import axios from "axios";
import { useState, useEffect, useContext } from "react";
import "./style.products.css"
import BASE_URL from "../../Hooks/Base_URL.";
import { AffiliateContext } from "../../Context/context";
import { CLIENT_DOMAIN } from "../../Hooks/Base_URL.";






const Products = () => {
    const [products, setProducts] = useState([]);
    const {isLoading, dispatch, successStatus, userInfo, setNotificationText, notificationText} = useContext(AffiliateContext);
  
  

    



    useEffect(()=>{
        const getAllProduct = async ()=>{
            dispatch({type:"ISLOADING_START"});

          try{
              const res = await axios.get(`${BASE_URL}/get/all/product`)
            
              setProducts(res.data);
              dispatch({type:"ISLOADING_END"});

          }catch(err){
            dispatch({type:"ISLOADING_END"});
          }
         
        }
        getAllProduct()
    }, [])
  




    const handleGetLink = async(productId, textCopy)=>{
        dispatch({type:"ISLOADING_START"});
        const data = {
            userId: userInfo?.id,
            productId: productId
        }
        
        try {
            const res = await axios.post(`${BASE_URL}/create/link`, data);
            dispatch({type:"ISLOADING_END"});
            setNotificationText('Link Copied');
            
            console.log(res?.data)
            const copiedFIle = `${CLIENT_DOMAIN}/sales/?affiliateId=${res?.data?.link}`
            await navigator.clipboard.writeText( copiedFIle );
        } catch (error) {
            dispatch({type:"ISLOADING_END"}); 
        }
    }




    useEffect(()=>{

        if(notificationText){
            setTimeout(() => {
                
                    setNotificationText(null)
              
            }, 1500);
        }
       

        
    }, [isLoading])



 





  return (
    <div className="productDiv1">
        <div className=" mainContainer flexDisplayColumn productDiv2">

       <div className="textDiv">
       <h2 className="pryFontHeaderFamily lgTextHeader  lgMarginTop primaryTextColor homeTextNow{">OFFERS</h2>
       </div>

            <div className=" flexDisplayRow lgMarginTop productDiv3">
            
            {products.map((item, index) => {
                return (
                    <div key={index} className="productDiv4 boxShadow mdMarginTop mdMarginLeft flexDisplayColumn">
                <img className="productImage" src={item.image}/>
                <h2 className="pryFontHeaderFamily mediumText lgMarginTop">{item.title}</h2>
                <p className="textp textFontFamily smMarginTop centerText smallerText">{item.description}</p>
                <button className="lgMarginTop globalBTN" onClick={()=>handleGetLink(item?.id, )}>Affiliate Link</button>
            </div>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default Products