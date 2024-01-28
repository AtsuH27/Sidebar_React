import React from 'react'
import { SidebarData } from './SidebarData';
import SidebarIcon from "./SidebarIcon.js" 

function Sidebar() {
    return( 
    <div className="Sidebar">
        <SidebarIcon/>
        <ul className="SidebarList">
        {SidebarData.map((value, key)=> {
            //map関数は一つ一つデータ取り出す。
            return(
                <li key={key} 
                id={window.location.pathname== value.link ? "active":""}
                className="row" 
                onClick={()=>{
                    window.location.pathname=value.link;
                }}
                >
                    <div id="icon">{value.icon}</div>
                    <div id="icon">{value.title}</div>
                </li>
            );
        })}
        </ul>
    </div>
  );
}

export default Sidebar