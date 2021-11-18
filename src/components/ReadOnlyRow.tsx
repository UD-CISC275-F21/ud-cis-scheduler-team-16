import React from "react";
import { Semester } from "./semester";
import { Course } from "./course";
import "../App.css";
import "../App.tsx";

const ReadOnlyRow = ({ plan, cour, setCurrentSemesterID, handleEditClick, handleDeleteClick }:
    {plan : Semester[], cour: Course , setCurrentSemesterID: (value: React.SetStateAction<string>) => void, handleEditClick: (event: React.MouseEvent, plan: Semester[]) => void, handleDeleteClick: (cour : Course) => void}) : JSX.Element => {
    return( 
        <tr key= {cour.ID} onClick= {() => setCurrentSemesterID(cour.ID)}>
            <td>{cour.School}</td>
            <td>{cour.ClassID}</td>
            <td>{cour.CourseName}</td>
            <td>{cour.Desc}</td>
            <td>{cour.Credits}</td>
            <td>
                <button className= "edit-class" type= "button" onClick={(event) => handleEditClick(event, plan)}></button>
                <button className= "delete-class" type= "button" onClick={()=> handleDeleteClick(cour)}></button>
            </td>
        </tr> 
    );
};

export default ReadOnlyRow;