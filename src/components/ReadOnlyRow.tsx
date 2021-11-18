import React from "react";
import { Plan } from "./plan";
import { Semester } from "./semester"
import { Course } from "./course"
import "../App.css";
import "../App.tsx";

const ReadOnlyRow = ({ plan, currentCourseID, setCurrentSemesterID, handleEditClick, handleDeleteClick }:
    {plan: Plan ,currentCourseID : String, setCurrentSemesterID: (value: React.SetStateAction<string>) => void, handleEditClick: (event: React.MouseEvent, plan: Semester[]) => void, handleDeleteClick: (currentCourseID: String) => void}) : JSX.Element => {
    return(
        { plan.map ( (sem: Semester) => 
            <div key= {sem.ID} onClick= {() => setCurrentSemesterID(sem.ID)}>
                {sem.SemesterName} <br />
                <td>{ sem.Courses.map ( (cour: Course) => cour.School)}</td>
                <td>{ sem.Courses.map ( (cour: Course) => cour.ClassID)}</td>
                <td>{ sem.Courses.map ( (cour: Course) => cour.CourseName)}</td>
                <td>{ sem.Courses.map ( (cour: Course) => cour.Desc)}</td>
                <td>{ sem.Courses.map ( (cour: Course) => cour.Credits)}</td>
                <td>
                    <button className= "edit-class" type= "button" onClick={(event) => handleEditClick(event, plan)}></button>
                    <button className= "delete-class" type= "button" onClick={()=> handleDeleteClick(currentCourseID)}></button>
                </td>
            </div> 
        )}
    );
};

export default ReadOnlyRow;