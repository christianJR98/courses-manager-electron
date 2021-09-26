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
        </ul>
    )
}

export default Sidebar;