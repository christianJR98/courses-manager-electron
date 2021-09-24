import React from 'react';

import './sidebar.css';

type props = {
    label: string;
    action: () => void
}

const Sidebar = () => {
    return (
        <ul className="sidebar__container">
            <li className="sidebar__option">Show courses</li>
            <li className="sidebar__option">Add course</li>
            <li className="sidebar__option">Update course</li>
            <li className="sidebar__option">Delete course</li>
        </ul>
    )
}

export default Sidebar;