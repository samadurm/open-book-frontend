import "../css/CourseCard.css";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import image from './hugo-delauney-gwKzPq-QNGg-unsplash.jpg'; //temporary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import React, { useEffect, useState } from 'react';

//import { library } from '@fortawesome/fontawesome-svg-core';


export default function CourseCard(props) {

    return (
        <div className="course-card">
            <img className="course-thumbnail" src={image} alt="" />
            <div className="course-text">
                <h2 className="course-name">{props.name}</h2>
                <p className="author-name">{props.author}</p>
                <p className="course-description">{props.description}</p>
                <p className="rating-title">Rating:</p>
                <div className="star-rating">
                    <FontAwesomeIcon className="star star1" icon={faStar} />
                    <FontAwesomeIcon className="star star2" icon={faStarRegular} />
                    <FontAwesomeIcon className="star star3" icon={faStarRegular} />
                    <FontAwesomeIcon className="star star4" icon={faStarRegular} />
                    <FontAwesomeIcon className="star star5" icon={faStarRegular} />
                </div>
            </div>
            <button className="start-button">Begin Course</button>
        </div>
    );
}