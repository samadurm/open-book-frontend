import CourseCard from '../components/CourseCard';
import Header from "../components/Header";
import CardSection from "../components/CardSection";
import "../css/Browse.css";
import "../css/Navbar.css";
/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { css, jsx } from '@emotion/react';
import axios from 'axios'
// import axios from 'axios'; // be used for fetching data from backend


export default function Create() {

    const [categoriesList, setCategoriesList] = useState([]);
    const [categoriesListCopy, setCategoriesListCopy] = useState([]);
    const [courses, setCourses] = useState([]);
    const [persons, setPersons] = useState([]);

    const getCategories = async () => {
        const response = await fetch(
            `http://open-book1.azurewebsites.net/api/course/categories`
        );
        const data = await response.json();
        console.log("categories: ", data);
        setCategoriesList(data);
        setCategoriesListCopy(data);
    };

    const getCourses = async () => {
        const response = await fetch(
            `http://open-book1.azurewebsites.net/api/course`
        );
        const data = await response.json();
        setCourses(data);
        console.log("courses: ", courses);
    };

    const getAuthor = async () => {
        const response = await fetch(
            `http://open-book1.azurewebsites.net/api/person`
        );
        const data = await response.json();
        console.log("persons: ", data);
        setPersons(data);
    };
    console.log("persons: ", persons);
    //useEffect(getAuthor)

    useEffect(getCourses, [])
    useEffect(getCategories, [])

    //search functionality 
    const handleSearch = async (event) => {
        let searchQuery = event.target.value.toLowerCase();

        let displayedCat = categoriesListCopy.filter((cat) => {
            var searchValue = cat.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        if (displayedCat)
            setCategoriesList(displayedCat)
        else
            setCategoriesList(categoriesList)
    }

    return (
        <div >
            <div>
                <Header
                    title="Browse"
                />
                <input onChange={handleSearch} type="text" placeholder="Search by category..." />
                {/* {lessons.number} */}
                {categoriesList.map(cat => (
                    <CardSection
                        persons={persons}
                        category={cat}
                    />
                ))}
            </div>
        </div>
    );
}