import React, { useState, Fragment } from "react";
//import { Accordion, Dropdown } from "react-bootstrap";
import { nanoid } from "nanoid";
import "./App.css";
//import courseData from "./components/class-list.json";
//import semesterData from "./components/semester-list.json";
import { Course } from "./components/course";
import { Semester } from "./components/semester";
//import { Plan } from "./components/plan";
import ReadOnlyRow from "./components/ReadOnlyRow";
import MutableRow from "./components/MutableRow";
import  Modal from "react-modal";
import { WriteMessage } from "./components/WelcomeMessage";
import { customModal } from "./components/WelcomeMessage";
import { ProSidebar, Menu, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";
import { loadSidebar } from "./components/sidebar";

/* Resources that assisted in the making of this:
1. Basis of the semester table: https://youtu.be/dYjdzpZv5yc
2. NanoID description: https://www.npmjs.com/package/nanoid
3. React-bootstrap accordion: https://react-bootstrap.github.io/components/accordion/
4. Modal: https://www.npmjs.com/package/react-modal

*/

const App = () : JSX.Element => {
    const [plan, setPlan] = useState<Semester[]>([]);
    const [currentSemesterID, setCurrentSemesterID]= useState("");
    const [currentSemester, setCurrentSemester] = useState<Semester>();
    const [courses, setCourse] = useState<Course[]>([]);
    const [modalOpen, setOpen] = useState(true); // For welcome message
    const [semNum, setSemNum] = useState(1);
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

    const handleEditCourseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        const newCourseData = {...editCourseData, [fieldName]: fieldValue};

        setEditCourseData(newCourseData);
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

        const index = courses.findIndex((course: Course) => course.ID === courseID);

        newCourses.splice(index, 1);

        setCourse(newCourses);
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
        const newPlan = [...plan];
        const index = plan.findIndex((semester: Semester) => semester.ID === currentSemesterID);

        //Note for later, add something in here that updates the other semester number when this is called

        newPlan.splice(index, 1);
        setPlan(newPlan);
    }

    function clearSemesters(plan : Semester[]){
        const newPlan = [...plan];
        newPlan.splice(0, newPlan.length);
        setPlan(newPlan);
    }

    function clearClasses(plan : Semester[]){
        //I DONT KNOW WHAT TO FUCKING PUT HERE
        
    }
    return <div className= "app-container">
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

                <button className = "edit-semester" type = "button" 
                    onClick= {() => addSemester(plan)}>Add Semester</button>
                <button className = "edit-semester" type = "button" 
                    onClick= {() => deleteSemester(plan)}>Delete Current Semester</button>
                <button className = "edit-semester" type = "button" 
                    onClick= {() => clearSemesters(plan)}>Clear All Semesters</button>
                <br /><br /><br />
                
                { plan.map ( (sem: Semester) => 
                    <div key= {sem.ID} onClick= {() => setCurrentSemesterID(sem.ID)}>
                        {sem.SemesterName} <br />
                        { sem.Courses.map ( (cour: Course) => cour.School)}
                        { sem.Courses.map ( (cour: Course) => cour.ClassID)}
                        { sem.Courses.map ( (cour: Course) => cour.CourseName)}
                        { sem.Courses.map ( (cour: Course) => cour.Desc)}
                        { sem.Courses.map ( (cour: Course) => cour.Credits)}
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
                    </div>           
                )}
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
            <div className="col-4">
                <div className="full-column">
                    <ProSidebar className="sidebar">
                        <SidebarHeader className="sidebar-header">
                        COURSE LIST
                        </SidebarHeader>
                        <SidebarContent>
                            <Menu iconShape="square">
                                {loadSidebar("MATH")}
                                {loadSidebar("CISC")}
                                {loadSidebar("EGGG")}
                                {loadSidebar("HIST")}
                                {loadSidebar("ENGL")}
                            </Menu>
                        </SidebarContent>
                        <SidebarFooter>

                        </SidebarFooter>
                    </ProSidebar>
                </div>
            </div>
        </div>  
    </div>;
};
export default App;