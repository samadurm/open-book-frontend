import CourseCard from '../components/CourseCard';
import Header from "../components/Header";
import CardSection from "../components/CardSection";
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
                {categoriesList.map(cat => (
                    <CardSection category={cat} />
                ))}
            </div>
        </div>
    );
}