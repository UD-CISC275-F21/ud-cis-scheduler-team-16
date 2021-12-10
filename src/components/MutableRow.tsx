import React from "react";
import { Course } from "../interfaces/course";
import "../App.css";

const MutableRow = ({editCourseData, handleEditCourseChange, handleCancelClick}: 
    {editCourseData: Course , handleEditCourseChange: (event: React.ChangeEvent<HTMLInputElement>) => void, handleCancelClick: () => void}) : JSX.Element => {
    return (
        <tr>
            <td>
                <input
                    type= "text"
                    required = {true}
                    placeholder= "Enter School"
                    name = "School"
                    value = {editCourseData.School}
                    onChange={handleEditCourseChange}
                ></input>
            </td>
            <td>                
                <input
                    type= "number"
                    required = {true}
                    placeholder= "Enter Course ID"
                    name = "ClassID"
                    value = {editCourseData.ClassID}
                    onChange={handleEditCourseChange}
                ></input>
            </td>
            <td>
                <input
                    type= "text"
                    required = {true}
                    placeholder= "Enter Course Name"
                    name = "CourseName"
                    value = {editCourseData.CourseName}
                    onChange={handleEditCourseChange}
                ></input>
            </td>
            <td>
                <input
                    type= "text"
                    required = {true}
                    placeholder= "Enter Desc"
                    name = "Desc"
                    value = {editCourseData.Desc}
                    onChange={handleEditCourseChange}
                ></input>
            </td>
            <td>
                <input
                    type= "number"
                    required = {true}
                    placeholder= "Enter Credit Amount"
                    name = "Credits"
                    value = {editCourseData.Credits}
                    onChange={handleEditCourseChange}
                ></input>
            </td>
            <td>
                <button className= "save-class" type= "submit"></button>
                <button className= "cancel-class" type= "button" onClick={handleCancelClick}></button>
            </td>
        </tr>
    );
};

export default MutableRow;