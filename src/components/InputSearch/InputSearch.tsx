import React, { useState } from 'react';

import './inputSearch.css';

type props = {
    action: (inputSearch: string) => void,
    placeholder: string;
}

const InputSearch = ({ action, placeholder }: props) => {
    const [inputSearch, setInputSearch] = useState('');

    const handleOnClick = () => {
        action(inputSearch);
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputSearch(e.target.value);
    }

    return (
        <div className="input-search__container">
            <input type="text" className="input-search__input" placeholder={placeholder} onChange={handleOnChange} />
            <button className="input-search__button" onClick={handleOnClick}>Search</button>
        </div>
    )
}

export default InputSearch;