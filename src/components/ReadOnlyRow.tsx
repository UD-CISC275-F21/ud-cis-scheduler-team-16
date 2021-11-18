import React from "react";
import { Course } from "./course";
import "../App.css";
import "../App.tsx";

const ReadOnlyRow = ({ cour, setCurrentCourseID, handleEditClick, handleDeleteClick }:
    {cour: Course , setCurrentCourseID: (value: React.SetStateAction<string>) => void, handleEditClick: (event: React.MouseEvent, cour: Course) => void, handleDeleteClick: (cour: Course) => void}) : JSX.Element => {
    return( 
        <tr key= {cour.ID} onClick= {() => setCurrentCourseID(cour.ID)}>
            <td>{cour.School}</td>
            <td>{cour.ClassID}</td>
            <td>{cour.CourseName}</td>
            <td>{cour.Desc}</td>
            <td>{cour.Credits}</td>
            <td>
                <button className= "edit-class" type= "button" onClick={(event) => handleEditClick(event, cour)}></button>
                <button className= "delete-class" type= "button" onClick={()=> handleDeleteClick(cour)}></button>
            </td>
        </tr> 
    );
};

export default ReadOnlyRow;