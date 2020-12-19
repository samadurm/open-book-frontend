import "../css/Header.css";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useInput } from '../components/GetUserInput';
import axios from 'axios'; // be used for fetching data from backend


export default function CourseForm() {

    const { value: courseTitle, bind: bindTitle, reset: resetTitle } = useInput('');
    const { value: courseDescription, bind: bindDescription, reset: resetDescription } = useInput('');
    const { value: category, bind: bindCategory, reset: resetCategory } = useInput('');

    console.log("Course title: ", courseTitle);
    console.log("Course description: ", courseDescription);
    console.log("Category: ", category);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting`);

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
                <option value="Art">Art</option>
                <option value="Music">Music</option>
                <option value="Business">Business</option>
                <option value="Misc">Misc.</option>
            </select>
            <input className="btn" type="submit" value="submit" />
        </form>
    );
}

