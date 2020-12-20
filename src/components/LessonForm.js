import "../css/Create.css";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useInput } from '../components/GetUserInput';
import { useEffect } from 'react';


export default function Lesson(props) {

    var lessonID;

    const { value: course, bind: bindCourse, reset: resetCourse } = useInput('');
    const { value: lessonTitle, bind: bindTitle, reset: resetTitle } = useInput('');
    const { value: filename, bind: bindFilename, reset: resetFilename } = useInput('');
    const { value: number, bind: bindNumber, reset: resetNumber } = useInput('');

    console.log("courseId: ", course);
    console.log("Course title: ", lessonTitle);
    console.log("File name: ", filename);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Course successfully submitted!`);

        let data = {
            number: number,
            filename: filename,
            title: lessonTitle
        }
        console.log(data);

        //POST to lessons
        fetch("http://open-book1.azurewebsites.net/api/lesson/", {
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
            console.log("RESPNSE", response);
            return response.text();
        }, function (error) {
            console.log(error);
        })
        assignLesson();
    }

    //GET from lessons
    /*const getLessons = async () => {
        const response = await fetch(
            `http://open-book1.azurewebsites.net/api/lesson/`
        );
        const data = await response.json();
        console.log(data);
        lessonID = data
        console.log("1LESSON ID: ", lessonID);
    };
    useEffect(getLessons, [])*/

    function assignLesson() {

        console.log("in assign lesson");
        console.log("2LESSON ID: ", lessonID);

        /*//POST to lessons_courses
        var url = "http://open-book1.azurewebsites.net/api/course/" + { courseId } + "/lessons/" + { lessonId }
        fetch(url, {
            method: "POST",
        }).then(function (response) {
            response.status; //=> number 100–599
            response.statusText; //=> String
            response.headers; //=> Headers
            response.url; //=> String

            return response.text();
        }, function (error) {
            console.log(error);
        })*/
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label for="courses">Select a course</label>
                <select id="courses" name="courses" {...bindCourse}>
                    {props.courses.map(course => (
                        <option value={course.id}>{course.name}</option>
                    ))}
                </select>
                <label for="name">Lesson title</label>
                <input id="name" type="text" {...bindTitle} />
                <label for="name">Lesson number</label>
                <input id="name" type="number" {...bindNumber} /><br /><br />
                <input type="file" id="myFile" name="filename" {...bindFilename} /><br />
                <input className="btn" type="submit" />
            </form>
        </div>

    );
}