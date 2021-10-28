import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./components/class-list.json";
import { Course } from "./components/course";
import ReadOnlyRow from "./components/ReadOnlyRow";
import MutableRow from "./components/MutableRow";

/* Tutorials that assisted in the making of this:
1. https://youtu.be/dYjdzpZv5yc
2. NanoID description: https://www.npmjs.com/package/nanoid

*/

const App = () => {
    const [courses, setCourse] = useState(data);
    const [addCourseData, setAddFormData] = useState<Course>({
        ID: "",
        School: "",
        ClassID: 108,
        CourseName: "",
        Desc: "",
        Credits: 3
    });

    const[editCourseData, setEditCourseData] = useState<Course>({
        ID: "",
        School: "",
        ClassID: 108,
        CourseName: "",
        Desc: "",
        Credits: 3
    });

    const [editCourseId, setEditCourseId] = useState("");

    const handleAddCourseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        const newCourseData = { ...addCourseData, [fieldName]: fieldValue};

        setAddFormData(newCourseData);
    };

    const handleEditCourseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        const newCourseData = {...editCourseData, [fieldName]: fieldValue};

        setEditCourseData(newCourseData);
    };

    const handleAddCourseSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newCourse = {
            ID: nanoid(),
            School: addCourseData.School,
            ClassID: addCourseData.ClassID,
            CourseName: addCourseData.CourseName,
            Desc: addCourseData.Desc,
            Credits: addCourseData.Credits
        };

        const newCourses = [...courses, newCourse];
        setCourse(newCourses);
    };

    const handleEditClick = (event: React.MouseEvent, course: Course)=> {
        event.preventDefault();
        setEditCourseId(course.ID);

        const courseValues = {
            ID: course.ID,
            School: course.School,
            ClassID: course.ClassID,
            CourseName: course.CourseName,
            Desc: course.Desc,
            Credits: course.Credits
        }

        setEditCourseData(courseValues);
    };

    return <div className= "app-container">
        <form>
            <table>
                <thead>
                    <tr>
                        <th>School</th>
                        <th>ClassID</th>
                        <th>Course Name</th>
                        <th>Desc</th>
                        <th>Credits</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course)=> ( 
                        <Fragment key={course.ID}>
                            { editCourseId === course.ID ? (
                                <MutableRow 
                                    editCourseData = {editCourseData} 
                                    handleEditCourseChange = {handleEditCourseChange}/> 
                            ) : ( 
                                <ReadOnlyRow 
                                    course={course} 
                                    handleEditClick={handleEditClick}/>
                            )} 
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </form>
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
                type = "number"
                name = "ClassID"
                required = {true}
                placeholder = "Enter a Class ID."
                onChange={handleAddCourseChange}
            />
            <input 
                type ="text"
                name = "Course Name"
                required = {true}
                placeholder = "Enter a Course Name."
                onChange={handleAddCourseChange}
            />
            <input 
                type ="text"
                name = "Desc"
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
