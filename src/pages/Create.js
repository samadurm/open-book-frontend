import Header from "../components/Header";
import LessonForm from "../components/LessonForm";
import "../css/Create.css";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from "react";
import CourseForm from "../components/CourseForm";

// import axios from 'axios'; // be used for fetching data from backend

export default function Create() {

    //var ReactDOM = require('react-dom')
    const [lessonList, setLessonList] = useState([]);

    /*const Lesson = () => {
        return <LessonForm />;
    };*/

    function newLesson() {
        //alert("new lesson to be added!")
        setLessonList(lessonList.concat(<LessonForm key={lessonList.length} />));
    }

    return (
        <div >
            <Header title="Create a new course" />
            <h3 className="sctn-title">1. Add a course</h3>
            <p className="sctn-detail">Add a new course and select the category it best fits in.</p>
            <div className="form-container">
                <CourseForm />
            </div>

            <h3 className="sctn-title">2. Add lessons to course</h3>
            <p className="sctn-detail">Add as many lessons as you want to an existing course. Upload as a .txt file or .mp4 file.</p>
            <div id="add-lesson-here">
                {lessonList}
            </div>
            <button onClick={newLesson} className="btn"> Add lesson</button>

        </div>
    );
}