import "./style.sidebar.css"
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FiTool }from "react-icons/fi";

const Sidebar = () => {
   
    const menuItem=[
        {
            path:"/dash",
            name:"Tools",
            
        },
    ]

  return (
    <div className="container secondaryColor">
           <div className="sidebar flexDisplayColumn">
               
               {
                   menuItem.map((item, index)=>(
                      
                        <ul className="sidebarDiv1 flexDisplayRow"> 
                            {item?.name == 'Tools' && 
                                <div className="sidebarDiv2">
                                    <FiTool/>
                                </div>}

                            <Link className="link">
                            <li className="sidebarItem pryFontHeaderFamily ">
                                {item?.name}
                            </li>
                            </Link>
                           
                        </ul>
                  
                       
                   ))
               }
           </div>
          
        </div>
  )
}

export default Sidebar