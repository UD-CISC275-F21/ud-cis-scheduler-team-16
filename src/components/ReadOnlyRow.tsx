import React from "react";
import { Course } from "./course";

const ReadOnlyRow = ({ course, handleEditClick, handleDeleteClick }:
    {course : Course , handleEditClick: (event: React.MouseEvent, course: Course) => void, handleDeleteClick: (courseId: string) => void}) : JSX.Element => {
    return(
        <tr key={course.ID}>
            <td>{course.School}</td>
            <td>{course.ClassID}</td>
            <td>{course.CourseName}</td>
            <td>{course.Desc}</td>
            <td>{course.Credits}</td>
            <td>
                <button className= "edit-class" type= "button" onClick={(event) => handleEditClick(event, course)}></button>
                <button className= "delete-class" type= "button" onClick={()=> handleDeleteClick(course.ID)}></button>
            </td>
        </tr> 
    );
};

export default ReadOnlyRow;