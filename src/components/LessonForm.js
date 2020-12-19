import "../css/Create.css";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useInput } from '../components/GetUserInput';


export default function Lesson() {

    const { value: course, bind: bindCourse, reset: resetCourse } = useInput('');
    const { value: lessonTitle, bind: bindTitle, reset: resetTitle } = useInput('');
    const { value: filename, bind: bindFilename, reset: resetFilename } = useInput('');

    console.log("Course: ", course);
    console.log("Course title: ", lessonTitle);
    console.log("File name: ", filename);

    return (
        <div className="form-container">
            <form>
                <label for="courses">Select a course</label>
                <select id="courses" name="courses" {...bindCourse}>
                    <option value="Course 1">Course 1</option>
                    <option value="Course 2">Course 2</option>
                </select>
                <label for="name">Lesson title</label>
                <input id="name" type="text" {...bindTitle} />
                <input type="file" id="myFile" name="filename" {...bindFilename} /><br />
                <input className="btn" type="submit" />
            </form>
        </div>

    );
}