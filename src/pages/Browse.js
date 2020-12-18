import CourseCard from '../components/CourseCard';
import "../css/Browse.css";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
// import axios from 'axios'; // be used for fetching data from backend


export default function Create() {

    return (
        <div >
            <div>
                <h1 className="header">Browse</h1>
                <div className="course-section">
                    <h3 className="section-title">Most Popular Courses</h3>
                    <div className="card-box">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
                </div>

                <div className="course-section">
                    <h3 className="section-title">Professional Development Courses</h3>
                    <div className="card-box">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
                </div>

            </div>
        </div>
    );
}