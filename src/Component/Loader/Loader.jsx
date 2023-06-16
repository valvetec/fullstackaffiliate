import './style.loader.css';
import loadingAffiliate from '../../images/loadingAffiliate.gif';
import loadingSpinner from '../../images/spinner_affilliate.gif'

const LoadSpinner = ()=>{

    return(
        <>
        

            

            <div className='spinnerMainDiv flexDisplayColumn'>
                    <h3 className='lgTextHeader loaderText1'>loading...</h3>
                    <img src={loadingSpinner} alt="" className='loaderImg'/>
            </div>
        
        </>
    )
}

export default LoadSpinner