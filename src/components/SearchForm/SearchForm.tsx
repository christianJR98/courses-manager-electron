import React, { useState } from "react";
const { ipcRenderer } = window.require('electron');
import InputSearch from "../InputSearch/InputSearch";
import Grid from "../Grid/Grid";
import { ACTIONS } from "../../constants/actions/actions";

import './searchForm.css';

const SearchForm = () => {
    const [searchResults, setSearchResults] = useState<null | Course[]>(null);

    const searchAction = async (searchInput: string) => {
        const data = await ipcRenderer.invoke(ACTIONS.SEARCH_COURSES, searchInput);
        setSearchResults(data)
    }

    return (
        <div>
            <InputSearch action={searchAction} placeholder="Search Course" />
            {searchResults && <Grid data={searchResults} />}
        </div>
    )
}

export default SearchForm;