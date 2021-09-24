import React from 'react';
import './card.css';

const Card = (course: Course) => {
    return (
        <div className='card__container'>
            <div className='card__title'>{course.title}</div>
            <img className='card__image' src={require(`../../assets/images/${course.image}`)} />
            <div>{course.author}</div>
            <div>{course.rating}</div>
        </div>
    )
}

export default Card;