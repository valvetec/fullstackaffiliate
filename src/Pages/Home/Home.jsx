import './style.home.css';
import '../../Hooks/global.style.css';
import phoneImage from '../../images/phone.png';
import ReactPlayer from 'react-player';
import { customData } from '../../Hooks/customData';
import { MdAttachMoney, MdFlight, MdOutlineTrackChanges, MdSupportAgent} from 'react-icons/md';
import {AiFillStar} from 'react-icons/ai';
import {SlGraph} from 'react-icons/sl';
import ladylaptop from '../../images/ladylaptop.jpg'
import FooterSection from '../../Component/Footer/Footer';









const HomePage = ()=>{

   

    
    return (
    
    <div className='wrapper '>
        

        <div className='homeDiv2 flexDisplayColumn'>
                <div className='homeDiv2SubDiv1 mainContainer flexDisplayColumn  '>
                        <div className='homeDiv2SubDiv1SubDiv1 flexDisplayRow  '>

                            <h3 className='pryFontHeaderFamily extraLargTextHeader primaryTextColor '>
                                 High
                            </h3>

                            <h3 className='pryFontHeaderFamily extraLargTextHeader smMarginLeft'>
                                 Commissions
                            </h3>

                            <h3 className='pryFontHeaderFamily extraLargTextHeader  primaryTextColor'>
                                Hot
                            </h3>

                            <h3 className='pryFontHeaderFamily extraLargTextHeader smMarginLeft'>
                                Products
                            </h3>
                        </div>

                    
                    <div className='flexDisplayRow'>
                        <h3 className='pryFontHeaderFamily extraLargTextHeader primaryTextColor'>
                            Reliable
                        </h3>

                        <h3 className='pryFontHeaderFamily extraLargTextHeader smMarginLeft'>
                            Payment
                        </h3>
                    </div>


                    <div className='homeDiv2SubDiv1SubDiv2 lgMarginTop flexDisplayRow'>
                        <div className='homeImage1Div'>
                            <img src={phoneImage} className='homeImage1'/>
                        </div>

                        <div className='homeDiv2SubDiv1SubDiv2SubDiv1 flexDisplayColumn lgMarginLeft smMarginBottom'>
                            <h3 className='pryFontHeaderFamily lgTextHeader'>
                                Welcome to the Best Travel Niche  <br></br> Affiliate Marketing System
                            </h3>

                            <p className='textFontFamily mdMarginTop smallText customHomeText1'>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                                content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                            </p>

                            <div className='homeCustomBTNDiv smMarginTop'>
                                <button className='globalBTN'>Get Started</button>
                            </div>
                        </div>
                    </div> 

                </div>




                <div className='mainContainer homeDiv2SubDiv1SubDiv2SubDiv2 lgMarginTop flexDisplayRow'>
                        <div className='homeDiv2SubDiv1SubDiv2SubDiv3 lgMarginLeft flexDisplayColumn '>
                            <h3 className='pryFontHeaderFamily lgTextHeader'>
                                Testimonials
                            </h3>

                            <p className='textFontFamily mdMarginTop smallText customHomeText1'>
                                It is a long established fact that a reader will be distracted by  <br></br> the readable content of a page when looking at its layout. 
                               
                            </p>
                        </div>

                        <div className='homeDiv2SubDiv1SubDiv2SubDiv4'>
                        <ReactPlayer url='https://www.youtube.com/watch?v=CrPmugeieTE'  />
                        </div>
                </div>


        </div>


                
        <div className=' homeDiv3'>
                <div  className='mainContainer flexDisplayColumn homeDiv3SubDiv1'>
                    <h3 className='pryFontHeaderFamily lgTextHeader customHomeText'>Join Our Affiliate Programme and Earn Money</h3>

                    <div className='flexDisplayRow homeDiv3SubDiv2 lgMarginTop '>
                        {customData.map((item, index)=>{
                            return(
                                <div key={index} className='homeDiv3SubDiv3  boxShadow mdMarginTop mdMarginLeft flexDisplayColumn'>
                                    {item.title === 'Fast Payment' ? < MdAttachMoney className='toolIcon primaryTextColor'/> : item.title === 'Great Offers' ? <AiFillStar className='toolIcon primaryTextColor'/>: 
                                    item.title === 'Amazing Travel Experience' ? <MdFlight className='toolIcon primaryTextColor'/>:
                                    item.title === 'Accurate Tracking' ? <MdOutlineTrackChanges className='toolIcon primaryTextColor'/>:
                                    item.title === 'Support' ? <MdSupportAgent className='toolIcon primaryTextColor'/>:
                                    item.title === 'High Commission' && <SlGraph className='toolIcon primaryTextColor'/>
                                    }
                                    <h4 className='pryFontHeaderFamily mediumText smMarginTop'>{item.title}</h4>
                                    <p className='textFontFamily smMarginTop centerText smallerText'>{item.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
        </div>


        
        <div className='homeDiv4'>
            <div className='flexDisplayRow homeDiv4SubDiv2'>
                    <h3 className='pryFontHeaderFamily lgTextHeader centerText'>The path to your first paycheck starts with </h3>
                    <h3 className='pryFontHeaderFamily lgTextHeader centerText primaryTextColor smMarginLeft'>Maximum Impact Travel Affiliate</h3>
            </div>
            <div className='homeDiv4SubDiv1 mdMarginTop'>
               
            </div>
        </div>


        <div className='homeDiv5'>
            <div className='mainContainer flexDisplayRow homeDiv5SubDiv1'>
                <h3 className='pryFontHeaderFamily lgTextHeader'>Subscribe to get latest offers and information in your inbox</h3>

                <div className='homeDiv5SubDiv2 flexDisplayColumn mdMarginLeft'>
                    <p className='textFontFamily smMarginTop smallerText'>Email</p>
                    <input type="text" className='customHomeInput' />

                    <button className='globalBTN smMarginTop customHomeBTN'>Subscribe</button>
                </div>
            </div>
        </div>

       
    </div>
        
    )
}


export default HomePage