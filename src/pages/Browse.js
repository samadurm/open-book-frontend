import CourseCard from '../components/CourseCard';
import Header from "../components/Header";
import "../css/Browse.css";
/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { css, jsx } from '@emotion/react';
// import axios from 'axios'; // be used for fetching data from backend


export default function Create() {

    const [categoriesList, setCategoriesList] = useState([]);
    const [courses, setCourses] = useState([]);

    const getCategories = async () => {
        const response = await fetch(
            `http://open-book1.azurewebsites.net/api/course/categories`
        );
        const data = await response.json();
        console.log(data);
        setCategoriesList(data);
    };

    const getCourses = async () => {
        const response = await fetch(
            `http://open-book1.azurewebsites.net/api/course`
        );
        const data = await response.json();
        console.log(data.hits);
        setCourses(data);
        console.log("courses: ", courses);
    };

    useEffect(getCourses, [])
    useEffect(getCategories, [])

    return (
        <div >
            <div>
                <Header title="Browse" />
                <div className="course-section">
                    <h3 className="section-title">Courses</h3>
                    <div className="card-box">
                        {courses.map(course => (
                            console.log("individual course: ", course),
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
            </div>
        </div>
    );
}