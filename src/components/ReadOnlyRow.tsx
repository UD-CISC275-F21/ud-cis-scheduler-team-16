import React from "react";
import { Plan } from "./plan";
import { Semester } from "./semester"
import "../App.css";
import "../App.tsx";

const ReadOnlyRow = ({ currentCourseID, plan, handleEditClick, handleDeleteClick }:
    {currentCourseID : String, plan: Plan , handleEditClick: (event: React.MouseEvent, plan: Semester[]) => void, handleDeleteClick: (currentCourseID: String) => void}) : JSX.Element => {
    return(
        <tr key={course.ID}>
            <td>{course.School}</td>
            <td>{course.ClassID}</td>
            <td>{course.CourseName}</td>
            <td>{course.Desc}</td>
            <td>{course.Credits}</td>
            <td>
                <button className= "edit-class" type= "button" onClick={(event) => handleEditClick(event, plan)}></button>
                <button className= "delete-class" type= "button" onClick={()=> handleDeleteClick(currentCourseID)}></button>
            </td>
        </tr> 
    );
};

export default ReadOnlyRow;