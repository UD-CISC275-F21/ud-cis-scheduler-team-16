import React, { useState, Fragment } from "react";
import { Accordion } from "react-bootstrap";
import  Modal from "react-modal";
import { nanoid } from "nanoid";
import "./App.css";
//import courseData from "./components/class-list.json";
//import semesterData from "./components/semester-list.json";
import { Course } from "./components/course";
import { Semester } from "./components/semester";
//import { Plan } from "./components/plan";
import ReadOnlyRow from "./components/ReadOnlyRow";
import MutableRow from "./components/MutableRow";
import { WriteMessage } from "./components/WelcomeMessage";
import { customModal } from "./components/WelcomeMessage";
//import { ProSidebar, Menu, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";
//import { loadSidebar } from "./components/sidebar";

/* Resources that assisted in the making of this:
1. Basis of the semester table: https://youtu.be/dYjdzpZv5yc
2. NanoID description: https://www.npmjs.com/package/nanoid
3. Modal: https://www.npmjs.com/package/react-modal
*/

const App = () : JSX.Element => {
    //Hooks
    const [plan, setPlan] = useState<Semester[]>([]);
    const [currentSemesterID, setCurrentSemesterID]= useState("");
    const [currentCourseID, setCurrentCourseID] = useState("");
    const [modalOpen, setOpen] = useState(true); // For welcome message
    const [semNum, setSemNum] = useState(1);
    const [editCourseId, setEditCourseId] = useState("");
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

    //Functions
    const handleEditCourseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        const newCourseData = {...editCourseData, [fieldName]: fieldValue};

        setEditCourseData(newCourseData);
    };

    const handleEditClick = (event: React.MouseEvent, plan: Semester[])=> {
        event.preventDefault();
        const semIndex = plan.findIndex((semester: Semester) => semester.ID === currentSemesterID);
        const courIndex = plan[semIndex].Courses.findIndex((course: Course) => course.ID === currentCourseID);
        setEditCourseId(plan[semIndex].Courses[courIndex].ID);

        const courseValues = {
            ID: plan[semIndex].Courses[courIndex].ID,
            School: plan[semIndex].Courses[courIndex].School,
            ClassID: plan[semIndex].Courses[courIndex].ClassID,
            CourseName: plan[semIndex].Courses[courIndex].CourseName,
            Desc: plan[semIndex].Courses[courIndex].Desc,
            Credits: plan[semIndex].Courses[courIndex].Credits
        };

        setEditCourseData(courseValues);
    };

    const handleEditCourseSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newPlan = plan.map(inner =>{ 
            return {...inner}; 
        });
        const semIndex = plan.findIndex((semester: Semester) => semester.ID === currentSemesterID);

        const editedCourse:Course = {
            ID: editCourseId,
            School: editCourseData.School,
            ClassID: editCourseData.ClassID,
            CourseName: editCourseData.CourseName,
            Desc: editCourseData.Desc,
            Credits: editCourseData.Credits
        };

        const courseIndex = plan[semIndex].Courses.findIndex((course: Course)=> course.ID === editCourseId);
        newPlan[semIndex].Courses[courseIndex] = editedCourse;
        setEditCourseId("");
    };

    const handleAddCourseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        const newCourseData = { ...addCourseData, [fieldName]: fieldValue};

        setAddFormData(newCourseData);
    };

    const handleAddCourseSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newPlan = plan.map(inner =>{ 
            return {...inner}; 
        });

        const semIndex = plan.findIndex((semester: Semester) => semester.ID === currentSemesterID);
        
        const newCourse = {
            ID: nanoid(),
            School: addCourseData.School,
            ClassID: addCourseData.ClassID,
            CourseName: addCourseData.CourseName,
            Desc: addCourseData.Desc,
            Credits: addCourseData.Credits
        };

        newPlan[semIndex].Courses.push(newCourse);
        setPlan(newPlan);
        setCurrentCourseID(newCourse.ID);
    };

    const handleCancelClick = () => {
        setEditCourseId("");
    };

    const handleDeleteClick = (course : Course) => {
        const newPlan = plan.map(inner =>{ 
            return {...inner}; 
        });
        const semIndex = plan.findIndex(semester => semester.ID === currentSemesterID);
        const courIndex = plan[semIndex].Courses.findIndex(course => course.ID === currentCourseID);


        newPlan[semIndex].Courses.splice(courIndex, 1);
        setCurrentCourseID("");
        setPlan(newPlan);
    };


    const closeModal = () => {
        setOpen(false);
    };

    const refreshPage = () => {
        window.location.reload();
    };

    function addSemester(plan : Semester[]){
        const newSemester ={
            ID: nanoid(),
            SemesterName: "Semester" + semNum,
            Courses: []
        };

        setSemNum(semNum + 1);
        setPlan([...plan, newSemester]);
    }

    function deleteSemester(plan : Semester[]){
        const newPlan = plan.map(inner =>{ 
            return {...inner}; 
        });
        const index = plan.findIndex((semester: Semester) => semester.ID === currentSemesterID);

        //Note for later, add something in here that updates the other semester number when this is called

        newPlan.splice(index, 1);
        setPlan(newPlan);
        setCurrentSemesterID("");
        setSemNum(semNum-1);
    }

    function clearSemesters(plan : Semester[]){
        const newPlan = plan.map(inner =>{ 
            return {...inner}; 
        });
        newPlan.splice(0, newPlan.length);
        
        setPlan(newPlan);
        setCurrentSemesterID("");
        setSemNum(1);
    }

    function clearClasses(plan : Semester[]){
        const newPlan = plan.map(inner =>{ 
            return {...inner}; 
        });
        const index = plan.findIndex((semester: Semester) => semester.ID === currentSemesterID);
        
        newPlan[index].Courses = [];
        setPlan(newPlan);
        setCurrentCourseID("");
    }

    return(
        <div className = "App">
            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                contentLabel="Welcome Message"
                style={customModal}
            >
                <WriteMessage closeModal={closeModal}></WriteMessage>
            </Modal>
            <div className="row">
                <div className="col-8">
                    <h1 className="header"><button className="refresh-logo" onClick={refreshPage}></button> UD CIS Scheduler</h1>
                    <br />
                    <button className = "edit-semester" type = "button" 
                        onClick= {() => addSemester(plan)}>Add Semester</button>
                    <button className = "edit-semester" type = "button" 
                        onClick= {() => deleteSemester(plan)}>Delete Current Semester</button>
                    <button className = "edit-semester" type = "button" 
                        onClick= {() => clearSemesters(plan)}>Clear All Semesters</button>
                    <button className = "edit-semester" type = "button" 
                        onClick= {() => clearClasses(plan)}>Clear All Classes From Selected Semester</button><br />
                    <br />
                </div>
            </div>
            <p>Current Semester: {currentSemesterID}</p>
            <p>Current Course: {currentCourseID}</p>
            <Accordion flush>
                { plan.map ( (sem: Semester) =>
                    <Accordion.Item eventKey= {sem.ID}  key = {sem.ID}>
                        <Accordion.Header onClick= {() => setCurrentSemesterID(sem.ID)}>{sem.SemesterName}</Accordion.Header>
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
                                        { sem.Courses.map ( (cour: Course) =>
                                            <Fragment key={currentSemesterID}>
                                                { editCourseId === currentCourseID ? 
                                                    <MutableRow 
                                                        editCourseData = {editCourseData} 
                                                        handleEditCourseChange = {handleEditCourseChange}
                                                        handleCancelClick = {handleCancelClick}
                                                    /> 
                                                    :  
                                                    <ReadOnlyRow 
                                                        cour = {cour}
                                                        plan = {plan}
                                                        handleEditClick={handleEditClick}
                                                        handleDeleteClick={handleDeleteClick}
                                                        setCurrentSemesterID={setCurrentSemesterID}
                                                    />
                                                } 
                                            </Fragment>
                                        )}
                                    </tbody>
                                </table>
                            </form>
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>
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
        </div>
        
    );
};
export default App;