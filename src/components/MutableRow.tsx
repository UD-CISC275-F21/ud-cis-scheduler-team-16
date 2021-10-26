import React from "react";
import { Course } from "./course";

const MutableRow = () => {
    return (
        <tr>
            <td>
                <input
                    type= "text"
                    required = {true}
                    placeholder= "Enter School"
                    name = "School"
                ></input>
            </td>
            <td>                
                <input
                    type= "number"
                    required = {true}
                    placeholder= "Enter Course ID"
                    name = "ClassID"
                ></input>
            </td>
            <td>
                <input
                    type= "text"
                    required = {true}
                    placeholder= "Enter Course Name"
                    name = "CourseName"
                ></input>
            </td>
            <td>
                <input
                    type= "text"
                    required = {true}
                    placeholder= "Enter Desc"
                    name = "Desc"
                ></input>
            </td>
            <td>
                <input
                    type= "number"
                    required = {true}
                    placeholder= "Enter Credit Amount"
                    name = "Credits"
                ></input>
            </td>

        </tr>
    );
};

export default MutableRow;