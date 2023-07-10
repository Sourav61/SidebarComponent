import React from 'react'
import "../App.css"
import { SidebarData } from './SidebarData'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul className="SidebarList">
                {SidebarData?.map((val, key) => {
                    return (
                        <li className="SidebarItem" key={key}
                            id={window?.location?.pathname == val?.link && "active"}
                            onClick={() => { window.location.pathname = val.link }}>
                            <div className="listIcon">{val.icon}</div>
                            <div className="listTitle">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Sidebar