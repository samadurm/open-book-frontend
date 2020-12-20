import "../css/CourseCard.css";
import Rating from "../components/Rating.js";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import image from './hugo-delauney-gwKzPq-QNGg-unsplash.jpg'; //temporary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import React, { useEffect, useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';


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
                <StarRatingComponent className="star-rating"
                    name="rate2"
                    value={props.averageRating}
                    editing={false}
                    starColor="#d6cd48"
                    emptyStarColor="#696D7D"
                />
            </div>
            <button className="start-button">Begin Course</button>
        </div>
    );
}