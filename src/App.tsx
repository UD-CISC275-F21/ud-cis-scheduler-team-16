import React, { useState } from "react";
import "./App.css";
import data from "./components/class-list.json";

const App = () => {
    const [courses, setCourse] = useState(data);

    return <div className= "app-container">
        <table>
            <thead>
                <tr>
                    <th>School</th>
                    <th>Class ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Credits</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((course)=> (              
                    <tr>
                        <td>{course.School}</td>
                        <td>{course["Class ID"]}</td>
                        <td>{course.Name}</td>
                        <td>{course.Desc}</td>
                        <td>{course.Credits}</td>
                    </tr> 
                ))}
            </tbody>
        </table>
    </div>;
};

export default App;
