/** @jsxRuntime classic */
/** @jsx jsx */
import CourseCard from '../components/CourseCard';
import { css, jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';

const cardbox = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0px 30px;  
`;

const sectiontitle = css`
    margin: 35px 5px 5px 35px;
    font-style: 'Helvetica Neue';
    font-weight: 500;
    font-size: 25px;
    color: #696D7D;  
`;


export default function CardSection(props) {

    const [courses, setCourses] = useState([]);

    const getCourses = async () => {
        const response = await fetch(
            `http://open-book1.azurewebsites.net/api/course`
        );
        const data = await response.json();
        //console.log(data);
        setCourses(data);
        //console.log("courses: ", courses);
    };

    const checkIfCourses = () => {
        console.log("hello")
        var count = 0;
        {
            courses.map(course => (
                props.category == course.category &&
                count++
            ))
        }
        if (count == 0) {
            return 0
        }
        else {
            return 1
        }
    }

    useEffect(getCourses, [])
    useEffect(checkIfCourses, [])

    var x = checkIfCourses()

    if (x) {
        return (
            <div>
                <h3 css={sectiontitle}>{props.category}</h3>
                <div css={cardbox}>
                    {courses.map(course => (
                        props.category == course.category &&
                        < CourseCard
                            name={course.name}
                            author={course.teacherId}
                            category={course.category}
                            description={course.description}
                            averageRating={course.averageRating}
                        />
                    ))}
                </div>
            </div>
        );
    }
    else {
        return (<div></div>)
    }

}