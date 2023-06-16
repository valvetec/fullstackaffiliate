import './style.affilatecard.css'
import React from 'react'

const AffiliateDashboardCard = () => {
  return (
    <div className='affdashcardDiv1'>
        <div className='affdashcardDiv2'>
            <div className='affdashcardDiv3'>



                {/* PART ONE */}
              <div className='affdashcardDiv4'>
              <div className='affdashcardDiv4sub1'>
                <img src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80' alt="zack" className='affdashcardImg1'/>

                <div>
                    <div className='affdashcardText1'>Good Morning</div>
                    <div className='affdashcardText2'>Zack Jack</div>
                </div>
               </div>
              </div>



        {/* PART  TWO */}
              <div className='affdashcardDiv5'>
              <div className='affdashcardDiv5sub'>
                <div className='affdashcardDiv5sub1'>
                    <div className='affdashcardDiv5sub2'>
                        <div className='affdashcardDiv5sub2sub1'>
                            <span className='affdashcardDiv5sub2sub1Span1'>affiliate balance</span>
                            <span className='affdashcardDiv5sub2sub1Span2'>#3, 500.00</span>
                        </div>
                    </div>
                    <div className='affdashcardDiv5sub2'>
                        <div className='affdashcardDiv5sub2sub1'>
                            <span className='affdashcardDiv5sub2sub1Span1'>RANK</span>
                            <span className="affdashcardDiv5sub2sub1Span3">Beginner 🟢</span>
                        </div>
                        <div className='affdashcardDiv5sub2sub1'>
                        <span className='affdashcardDiv5sub2sub1Span1'>Bank</span>
                        <span className="affdashcardDiv5sub2sub1Span3">Zenith</span>
                        </div>
                    </div>
                    <div className='affdashcardDiv5sub3'>
                        <button className='affdashcardDivButton'>Transfer Fund</button>
                    </div>
                </div>

                {/* PART THREE */}
                <div className='affdashcardDiv5sub1 afov'>
                    <p className='affdashcardP'>Activity Balance</p>
                    <div className='affdashcardDiv5sub2 width'>
                        <h4 className='affdashcardDiv5sub2sub1Span4'>#6,000.00</h4>
                        <button>Balance</button>
                    </div>
                </div>

                {/* OVERLAYED */}
                <div></div>


              </div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default AffiliateDashboardCard