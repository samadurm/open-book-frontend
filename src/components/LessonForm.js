import "../css/Create.css";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useInput } from '../components/GetUserInput';


export default function Lesson(props) {

    const { value: course, bind: bindCourse, reset: resetCourse } = useInput('');
    const { value: lessonTitle, bind: bindTitle, reset: resetTitle } = useInput('');
    const { value: filename, bind: bindFilename, reset: resetFilename } = useInput('');

    console.log("courseId: ", course);
    console.log("Course title: ", lessonTitle);
    console.log("File name: ", filename);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Course successfully submitted!`);

        let data = {
            courseId: course,
            title: lessonTitle,
        }
        console.log(data);

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

            return response.text();
        }, function (error) {
            console.log(error);
        })
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
                <input type="file" id="myFile" name="filename" {...bindFilename} /><br />
                <input className="btn" type="submit" />
            </form>
        </div>

    );
}