import React from 'react';

import './sidebar.css';

type Option = {
    label: string;
    action: () => void
}

type props = {
    options: Option[]
}

const Sidebar = ({ options }: props) => {
    return (
        <ul className="sidebar__container">
            {options.map((item: Option) => {
                return (
                    <li onClick={item.action} className="sidebar__option">
                        {item.label}
                    </li>
                )
            })}
            {/* <li className="sidebar__option"><button></button> Show courses</li>
            <li className="sidebar__option">Add course</li>
            <li className="sidebar__option">Update course</li>
            <li className="sidebar__option">Delete course</li> */}
        </ul>
    )
}

export default Sidebar;