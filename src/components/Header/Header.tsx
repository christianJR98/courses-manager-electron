import React from 'react';

import './header.css';

type props = {
    title: string;
}

const Header = ({ title }: props) => {
    return (
        <header className="header__title">{title}</header>
    )
}

export default Header;