import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';

export default function Rating(props) {
    console.log("RATING ", props.value)
    return (
        <div className="star-rating">
            <FontAwesomeIcon className="star star1" icon={faStar} />
            <FontAwesomeIcon className="star star2" icon={faStarRegular} />
            <FontAwesomeIcon className="star star3" icon={faStarRegular} />
            <FontAwesomeIcon className="star star4" icon={faStarRegular} />
            <FontAwesomeIcon className="star star5" icon={faStarRegular} />
        </div>
    );
}