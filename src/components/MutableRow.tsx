import React from "react";
import { Course } from "./course";

const MutableRow = ({editCourseData, handleEditCourseChange} : {editCourseData: Course , handleEditCourseChange: (event: React.ChangeEvent<HTMLInputElement>) => void}) => {
    return (
        <tr>
            <td>
                <input
                    type= "text"
                    required = {true}
                    placeholder= "Enter School"
                    name = "School"
                    onChange={handleEditCourseChange}
                ></input>
            </td>
            <td>                
                <input
                    type= "number"
                    required = {true}
                    placeholder= "Enter Course ID"
                    name = "ClassID"
                    onChange={handleEditCourseChange}
                ></input>
            </td>
            <td>
                <input
                    type= "text"
                    required = {true}
                    placeholder= "Enter Course Name"
                    name = "CourseName"
                    onChange={handleEditCourseChange}
                ></input>
            </td>
            <td>
                <input
                    type= "text"
                    required = {true}
                    placeholder= "Enter Desc"
                    name = "Desc"
                    onChange={handleEditCourseChange}
                ></input>
            </td>
            <td>
                <input
                    type= "number"
                    required = {true}
                    placeholder= "Enter Credit Amount"
                    name = "Credits"
                    onChange={handleEditCourseChange}
                ></input>
            </td>

        </tr>
    );
};

export default MutableRow;