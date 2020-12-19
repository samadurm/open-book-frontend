import "../css/Create.css";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';


export default function Lesson() {

    return (
        <div className="form-container">
            <form>
                <label for="courses">Select a course</label>
                <select id="courses" name="courses">
                    <option value="arto">Course 1</option>
                    <option value="music">Course 2</option>
                </select>
                <label for="name">Lesson title</label>
                <input id="name" type="text" />
                <input type="file" id="myFile" name="filename" /><br />
                <input className="btn" type="submit" />
            </form>
        </div>

    );
}