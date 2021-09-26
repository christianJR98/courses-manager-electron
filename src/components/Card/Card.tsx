import React from 'react';
import './card.css';

type props = {
    course: Course;
}

const Card = ({ course }: props) => {
    return (
        <div className='card__container'>
            <div className='card__title'>{course.title}</div>
            <img className='card__image' src={require(`../../data/images/${course.image}`)} />

            <div className='card__author'>{course.author}</div>
            <div className='card__rating'>{course.rating}</div>
        </div>
    )
}

export default Card;