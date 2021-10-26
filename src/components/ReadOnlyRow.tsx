import React from "react";
import { Course } from "./course";

const ReadOnlyRow = ({ course }) => {
    return(
        <tr key={course.ID}>
            <td>{course.School}</td>
            <td>{course.ClassID}</td>
            <td>{course.CourseName}</td>
            <td>{course.Desc}</td>
            <td>{course.Credits}</td>
        </tr> 
    );
};

export default ReadOnlyRow