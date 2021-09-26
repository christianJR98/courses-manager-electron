import React, { FormEvent, useState } from 'react';
const { ipcRenderer } = window.require('electron');

import './addForm.css';

const INITIAL_STATE = {
    title: "",
    image: "",
    author: "",
    rating: 0
}

const AddForm = () => {
    const [data, setData] = useState(INITIAL_STATE);

    const handleInputChange = (e: any) => {
        let value;
        e.target.type === "file" ? value = e.target.files[0].path : value = e.target.value;

        setData({
            ...data,
            [e.target.name]: value
        })
    }

    const handleOnSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await ipcRenderer.invoke('addCourse', data);
    }

    return (
        <form className="addForm__container">
            <input type="text" name="title" placeholder="Title" onChange={handleInputChange} required />
            <input type="file" name="image" placeholder="Image" onChange={handleInputChange} required />
            <input type="text" name="author" placeholder="Author" onChange={handleInputChange} required />
            <input type="number" name="rating" placeholder="Rating" onChange={handleInputChange} required step="0.1" min="0" max="5" />
            <button onClick={handleOnSubmit}>
                Add Course
            </button>
        </form>
    )
}

export default AddForm;