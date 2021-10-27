import React from "react";
import { Course } from "./course";

const ReadOnlyRow = ({ course, handleEditClick }:
    {course : Course , handleEditClick: (event: React.MouseEvent, course: Course) => void}) => {
    return(
        <tr key={course.ID}>
            <td>{course.School}</td>
            <td>{course.ClassID}</td>
            <td>{course.CourseName}</td>
            <td>{course.Desc}</td>
            <td>{course.Credits}</td>
            <td>
                <button type= "button" onClick={(event) => handleEditClick(event, course)}></button>
            </td>
        </tr> 
    );
};

export default ReadOnlyRow;