import React from "react";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import "../App.css";
import "../App.tsx";

const ReadOnlyRow = ({ plan, setPlan, setCurrentSemesterID, currentSemesterID, cour, currentCourseID, setCurrentCourseID, handleEditClick, handleDeleteClick, setEditCourseData}:
    {cour: Course , currentCourseID: string, setEditCourseData: React.Dispatch<React.SetStateAction<Course>>,plan: Semester[], setPlan: React.Dispatch<React.SetStateAction<Semester[]>>, 
        currentSemesterID: string, setCurrentSemesterID: React.Dispatch<React.SetStateAction<string>>, setCurrentCourseID: (value: React.SetStateAction<string>) => void, 
        handleEditClick: (event: React.MouseEvent, cour: Course, currentCourseID: string, setCurrentCourseID: React.Dispatch<React.SetStateAction<string>>, setEditCourseData: React.Dispatch<React.SetStateAction<Course>>) => void, 
        handleDeleteClick: (event: React.MouseEvent, cour: Course, plan: Semester[], currentSemesterID: string, setCurrentSemesterID: React.Dispatch<React.SetStateAction<string>>, setPlan: React.Dispatch<React.SetStateAction<Semester[]>>) => void}) : JSX.Element => {
    return( 
        <tr key= {cour.ID} onClick= {() => setCurrentCourseID(cour.ID)}>
            <td>{cour.School}</td>
            <td>{cour.ClassID}</td>
            <td>{cour.CourseName}</td>
            <td>{cour.Desc}</td>
            <td>{cour.Credits}</td>
            <td>
                <button className= "edit-class" type= "button" onClick={(event) => handleEditClick(event, cour, currentCourseID, setCurrentCourseID, setEditCourseData)}></button>
                <button className= "delete-class" type= "button" onClick={(event)=> handleDeleteClick(event, cour, plan, currentSemesterID, setCurrentSemesterID, setPlan)}></button>
            </td>
        </tr> 
    );
};

export default ReadOnlyRow;