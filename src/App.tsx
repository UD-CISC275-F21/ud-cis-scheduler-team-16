import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./components/class-list.json";

/* Tutorials that assisted in the making of this:
1. https://youtu.be/dYjdzpZv5yc
2. NanoID description: https://www.npmjs.com/package/nanoid

*/

const App = () => {
    const [courses, setCourse] = useState(data);
    const [addCourseData, setAddFormData] = useState({
        School: "",
        ClassID: "",
        Name: "",
        Description: "",
        Credits: ""
    });

    const handleAddCourseChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newCourseData = { ...addCourseData};
        newCourseData[fieldName] = fieldValue;

        setAddFormData(newCourseData);
    };

    const handleAddCourseSubmit = (event) => {
        event.preventDefault();

        const newCourse = {
            ID: nanoid(),
            School: addCourseData.School,
            ClassID: addCourseData.ClassID,
            Name: addCourseData.Name,
            Description: addCourseData.Description,
            Credits: addCourseData.Credits
        };

        const newCourses = [...courses, newCourse];
        setCourse(newCourses);
    };

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
                    <tr key={course.ID}>
                        <td>{course.School}</td>
                        <td>{course["Class ID"]}</td>
                        <td>{course.Name}</td>
                        <td>{course.Desc}</td>
                        <td>{course.Credits}</td>
                    </tr> 
                ))}
            </tbody>
        </table>
        <h2>Add another Class</h2>
        <form onSubmit={handleAddCourseSubmit}>
            <input 
                type ="text"
                name = "School"
                required= {true}
                placeholder = "Enter a School."
                onChange={handleAddCourseChange}
            />
            <input 
                type ="number"
                name = "ClassID"
                required = {true}
                placeholder = "Enter a Class ID."
                onChange={handleAddCourseChange}
            />
            <input 
                type ="text"
                name = "Class Name"
                required = {true}
                placeholder = "Enter a Class Name."
                onChange={handleAddCourseChange}
            />
            <input 
                type ="text"
                name = "Description"
                required = {true}
                placeholder = "Enter a Class Description."
                onChange={handleAddCourseChange}
            />
            <input 
                type ="number"
                name = "Credits"
                required = {true}
                placeholder = "Enter a Credit Amount."
                onChange={handleAddCourseChange}
            />
            <button type="submit">Add Course</button>
        </form>
    </div>;
};

export default App;
