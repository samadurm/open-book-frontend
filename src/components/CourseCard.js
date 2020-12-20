import "../css/CourseCard.css";
import Rating from "../components/Rating.js";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import image1 from '../images/cooking.jpg'; //temporary
import image2 from '../images/history.jpg';
import image3 from '../images/education.jpg';
import image4 from '../images/miscellaneous.jpg';
import image5 from '../images/literature.jpg';
import image6 from '../images/programming.jpg';
import image7 from '../images/science.jpg';
import image8 from '../images/technology.jpg';
import React, { useEffect, useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default function CourseCard(props) {

    //const [persons, setPersons] = useState([0]);
    var people;

    var image = image4
    selectPhoto()
    function selectPhoto() {
        if (props.category.toLowerCase() == 'cooking') { image = image1; }
        else if (props.category.toLowerCase() == 'history') { image = image2 }
        else if (props.category.toLowerCase() == 'education') { image = image3 }
        else if (props.category.toLowerCase() == 'literature') { image = image5 }
        else if (props.category.toLowerCase() == 'programming') { image = image6 }
        else if (props.category.toLowerCase() == 'science') { image = image7 }
        else if (props.category.toLowerCase() == 'technology') { image = image8 }
        else {
            image = image4
        }

    }

    /*const getAuthor = async () => {
        const response = await fetch(
            `http://open-book1.azurewebsites.net/api/person`
        );
        const data = await response.json();
        console.log("data: ", data);
        people = data[1].firstName
        //console.log("1people: ", people);
        setPersons(data);

    };
    useEffect(getAuthor, [])*/
    //{persons.firstName} {persons.lastName}
    //Author ID {props.author}

    //console.log("{props.authorID}:", props.authorID)
    console.log("AUTHOR:", props.author)

    return (
        <div className="course-card">
            <img className="course-thumbnail" src={image} />
            <div className="course-text">
                <h2 className="course-name">{props.name}</h2>
                <p className="author-name">{props.author}</p>
                <p className="course-description">{props.description}</p>
                <p className="rating-title">Rating:</p>
                <StarRatingComponent className="star-rating"
                    name="rate2"
                    value={props.averageRating}
                    editing={false}
                    starColor="#f2eb84"
                    emptyStarColor="#696D7D"
                />
            </div>
            <button className="start-button">Begin Course</button>
        </div>
    );
}