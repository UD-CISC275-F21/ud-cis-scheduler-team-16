import React from "react";
import { Course } from "../interfaces/course";
import "../App.css";
import "../App.tsx";

const ReadOnlyRow = ({ cour, currentCourseID, setCurrentCourseID, handleEditClick, handleDeleteClick, setEditCourseData}:
    {cour: Course , currentCourseID: string, setEditCourseData: React.Dispatch<React.SetStateAction<Course>>, setCurrentCourseID: (value: React.SetStateAction<string>) => void, 
        handleEditClick: (event: React.MouseEvent, cour: Course, currentCourseID: string, setCurrentCourseID: React.Dispatch<React.SetStateAction<string>>, setEditCourseData: React.Dispatch<React.SetStateAction<Course>>) => void, 
        handleDeleteClick: (event: React.MouseEvent, cour: Course) => void}) : JSX.Element => {
    return( 
        <tr key= {cour.ID} onClick= {() => setCurrentCourseID(cour.ID)}>
            <td>{cour.School}</td>
            <td>{cour.ClassID}</td>
            <td>{cour.CourseName}</td>
            <td>{cour.Desc}</td>
            <td>{cour.Credits}</td>
            <td>
                <button className= "edit-class" type= "button" onClick={(event) => handleEditClick(event, cour, currentCourseID, setCurrentCourseID, setEditCourseData)}></button>
                <button className= "delete-class" type= "button" onClick={(event)=> handleDeleteClick(event, cour)}></button>
            </td>
        </tr> 
    );
};

export default ReadOnlyRow;