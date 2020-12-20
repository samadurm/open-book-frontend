import "../css/Header.css";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useInput } from '../components/GetUserInput';
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // be used for fetching data from backend


export default function CourseForm() {

    const [categoriesList, setCategoriesList] = useState([]);

    const { value: courseTitle, bind: bindTitle, reset: resetTitle } = useInput('');
    const { value: courseDescription, bind: bindDescription, reset: resetDescription } = useInput('');
    const { value: category, bind: bindCategory, reset: resetCategory } = useInput('');

    console.log("Course title: ", courseTitle);
    console.log("Course description: ", courseDescription);
    console.log("Category: ", category);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Course successfully submitted!`);

        let data = {
            name: courseTitle,
            category: category,
            description: courseDescription
        }
        console.log(data);

        fetch("http://open-book1.azurewebsites.net/api/course", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            response.status; //=> number 100–599
            response.statusText; //=> String
            response.headers; //=> Headers
            response.url; //=> String

            return response.text();
        }, function (error) {
            console.log(error);
        })
    }

    const getCategories = async () => {
        const response = await fetch(
            `http://open-book1.azurewebsites.net/api/course/categories`
        );
        const data = await response.json();
        setCategoriesList(data);
        console.log(data);
    };

    useEffect(getCategories, [])

    return (
        <form onSubmit={handleSubmit}>

            <label for="title">Course title</label><br />
            <input required
                type="text"
                placeholder="Title"
                {...bindTitle}
            />
            <br />
            <label for="description">Course description</label><br />
            <input id="description" type="text" {...bindDescription} />
            <br />
            <label for="cars">Select a category:</label>
            <select id="category-form" name="category" {...bindCategory}>
                {categoriesList.map(cat => (
                    <option value={cat}>{cat}</option>
                ))}
            </select>
            <input className="btn" type="submit" value="submit" />
        </form>
    );
}

