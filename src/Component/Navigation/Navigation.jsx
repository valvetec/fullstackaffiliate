import './style.navigation.css';
import '../../Hooks/global.style.css';
import { Link } from 'react-router-dom';
import { AffiliateContext } from '../../Context/context';
import { useContext } from 'react';







const NavigationHeader = ()=>{
    const menu = ['Home', 'About', 'Support', 'Policy', 'Dashboard']
    const {isLoading, dispatch, successStatus, userInfo} = useContext(AffiliateContext);

    return (
        <>
        

        <div className='navHeader bgColor boxShadow'>

            <div className='mainContainer flexDisplayRow navHeaderDiv1'>
                <div className='navHeaderSubDiv1 flexDisplayRow'>
                    <h1 className='pryFontHeaderFamily primaryTextColor textHeader '>
                        Maximum
                    </h1>

                    <h1 className='pryFontHeaderFamily smMarginLeft secondaryTextColor textHeader'>
                        Impact Affiliate
                    </h1>
                </div>


            <ul className='navHeaderSubDiv2 flexDisplayRow'>
                    {menu.map((item, index)=>{
                        return(
                            <Link  className='link' to={item === 'Home'? '/' : item === 'Dashboard' ? '/dash': null}>
                                 <li key={index} className='secondaryTextColor pryFontHeaderFamily mediumText custom-li'>
                                    {item}
                                </li>
                            </Link>
                           
                        )
                        })}
                </ul>


            <div className='navHeaderSubDiv3 flexDisplayRow mediumText secondaryTextColor'>
                <Link className='link' to="/login">
                    <h4 className='pryFontHeaderFamily cursorPointer'>
                     Login
                    </h4>
                </Link>

               {userInfo?.userName ?  
               <Link to="/dash">
                    < button className='globalBTN'>Dashboard</button>
                </Link>
                :
                <Link to="/registration">
                    < button className='globalBTN'>Register</button>
                </Link>
            }
            </div>
        </div>

    </div>


        
        
        </>
    )
}



export default NavigationHeader