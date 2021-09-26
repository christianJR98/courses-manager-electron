import React, { useEffect, useState } from 'react';
const { ipcRenderer } = window.require('electron');
import Card from '../../components/Card/Card';

import './grid.css';

const Grid = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        const getCourses = async () => {
            const courses = await ipcRenderer.invoke('getCourses');
            setCourses(courses)
        }

        getCourses()
    }, [])

    return (
        <div className="grid__container">
            {courses.length > 0 ?
                courses.map((item: Course) => <Card key={item.id} course={item} />)
                :
                <div> There are no courses</div>
            }
        </div>
    )
}

export default Grid;