import React from 'react';

import Card from '../../components/Card/Card';
import { courses } from '../../data/courses';

import './grid.css';

const Grid = () => {
    return (
        <div className="grid__container">
            <Card {...courses[0]} />
            <Card {...courses[0]} />
            <Card {...courses[0]} />
            <Card {...courses[0]} />
            <Card {...courses[0]} />
            <Card {...courses[0]} />
            <Card {...courses[0]} />
        </div>
    )
}

export default Grid;