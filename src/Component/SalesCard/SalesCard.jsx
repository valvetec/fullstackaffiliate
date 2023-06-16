import NavigationHeader from "../Navigation/Navigation";
import "./sales.style.css";
import { useSearchParams } from "react-router-dom"







const SalesCard = () => {
const affiliateId = window?.location?.search.split('=')[1]

















  return (
    <div className="saleDiv1">
       
          <div className="saleDiv4">
            <div className="saleDiv3"></div>
            <div className="saleDiv2">
                <img className="saleImage1" src="https://media.istockphoto.com/id/901630488/photo/great-pyramids-of-giza.jpg?s=612x612&w=0&k=20&c=Lq_YWk9rE--HCIGUwsog9RPVJs8ZcEs9TPozd1liNXI="/>
                <h1 className="h1">EGYPT</h1>
            </div>
          </div>

          <div className="saleSecondDiv1">
            <div className="saleSecondDiv2">
              <div className="saleSecondDiv3">
                <div className="mainContainer">


                  <div className="saleSecondDiv4">
                    <h3 className="h3">
                      THE EGYPT EXPERIENCE - CAIRO, LUXOR, ASWAN & NILE CRUISE
                    </h3>
                  </div>

                  <div className="saleSecondDiv5">
                    <p className="p">
                      Egypt is well-known for its ancient history museums, the
                      Pyramids of Giza, temple complexes, mummies, and the Great
                      Sphinx. The official language is Egyptian Arabic. The
                      climate is hot with dry summers and moderate winters. The
                      most significant unit of Egyptian society is the family
                      unit. ​The staple foods are onions, vegetables, beans and
                      lentils, along with wheat bread, milk and tea. Egyptian
                      markets are full of food, souvenirs, jewelry, spices,
                      perfumes, and local handicrafts. ​
                    </p>
                    <br></br>
                    <p className="p">
                      Here you will find millennial mummies, mouthwatering food,
                      and history thousands of years old! Get to know this
                      ancient civilization and marvel at some of humanity’s most
                      impressive monuments. Enjoy breathtaking views over the
                      Nile, the oldest Pyramids in the world and stories of
                      treason and love. Are you ready for the trip of a
                      lifetime? Egypt awaits!
                    </p>
                  </div>


                  <div className="saleSecondDiv6">
                    <button  className="globalBTN"><a href={`https://bookingfrontend-a13b.onrender.com/builder/live/6488e2f3a516ab0cdae740dc-experience-The-Egyptian-Vibe?affiliateId=${affiliateId}`}></a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
  );
};

export default SalesCard;