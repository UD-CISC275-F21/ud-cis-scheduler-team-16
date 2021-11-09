import React, { useState, Fragment } from "react";
import { Accordion } from "react-bootstrap";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./components/class-list.json";
import { Course } from "./components/course";
import ReadOnlyRow from "./components/ReadOnlyRow";
import MutableRow from "./components/MutableRow";
import  Modal from "react-modal";
import { WriteMessage } from "./components/WelcomeMessage";
import { customModal } from "./components/WelcomeMessage";
import { AddSemester } from "./components/addsemester";
import { customModalSemester } from "./components/addsemester";

/* Resources that assisted in the making of this:
1. Basis of the semester table: https://youtu.be/dYjdzpZv5yc
2. NanoID description: https://www.npmjs.com/package/nanoid
3. React-bootstrap accordion: https://react-bootstrap.github.io/components/accordion/
4. Modal: https://www.npmjs.com/package/react-modal

*/

const App = () : JSX.Element => {
    const [courses, setCourse] = useState(data);
    const [modalOpen, setOpen] = React.useState(true);
    const [addCourseData, setAddFormData] = useState<Course>({
        ID: "",
        School: "",
        ClassID: 0,
        CourseName: "",
        Desc: "",
        Credits: 0
    });

    const[editCourseData, setEditCourseData] = useState<Course>
    ({
        ID: "",
        School: "",
        ClassID: 0,
        CourseName: "",
        Desc: "",
        Credits: 0
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

    const handleEditCourseSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const editedCourse:Course = {
            ID: editCourseId,
            School: editCourseData.School,
            ClassID: editCourseData.ClassID,
            CourseName: editCourseData.CourseName,
            Desc: editCourseData.Desc,
            Credits: editCourseData.Credits
        };

        const newCourses = [...courses];

        const index = courses.findIndex((course: Course)=> course.ID === editCourseId);

        newCourses[index] = editedCourse;

        setCourse(newCourses);
        setEditCourseId("");
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
        };

        setEditCourseData(courseValues);
    };

    const handleCancelClick = () => {
        setEditCourseId("");
    };

    const handleDeleteClick = (courseID: string) => {
        const newCourses = [...courses];

        const index = courses.findIndex((course: Course) => course.ID = courseID);

        newCourses.splice(index, 1);

        setCourse(newCourses);
    };


    const closeModal = () => {
        setOpen(false);
    };

    const openModal = () => {
        setOpen(true);
    };

    const refreshPage = () => {
        window.location.reload();
    };

    return <div className= "app-container">
        <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            contentLabel="Welcome Message"
            style={customModal}
        >
            <WriteMessage closeModal={closeModal}></WriteMessage>
        </Modal>
        <button className="refresh-logo" onClick={refreshPage}></button> 
        <h1 className="header">UD CIS Scheduler</h1>
        <Accordion flush>
            <Accordion.Item eventKey = "0">
                <Accordion.Header>Semester 1</Accordion.Header>
                <Accordion.Body>
                    <form onSubmit={handleEditCourseSubmit}>
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
                                {courses.map(course=>  
                                    <Fragment key={course.ID}>
                                        { editCourseId === course.ID ? 
                                            <MutableRow 
                                                editCourseData = {editCourseData} 
                                                handleEditCourseChange = {handleEditCourseChange}
                                                handleCancelClick = {handleCancelClick}
                                            /> 
                                            :  
                                            <ReadOnlyRow 
                                                course={course} 
                                                handleEditClick={handleEditClick}
                                                handleDeleteClick={handleDeleteClick}
                                            />
                                        } 
                                    </Fragment>
                                )}
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
                            name = "CourseName"
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
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <button>Add Semester</button>
        <button>Delete Semester</button>
    </div>;
};

export default App;
