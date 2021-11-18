import React, { useState, Fragment } from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import  Modal from "react-modal";
import { nanoid } from "nanoid";
import "./App.css";
//import courseData from "./components/class-list.json";
//import semesterData from "./components/semester-list.json";
import { Course } from "./components/course";
import { Semester } from "./components/semester";
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
    //Const Var
    const LOCAL_STORAGE_PLAN = "fouryearplanner_plan";
    const INITIAL_PLAN: Semester[] = [
        { ID: "0", SemesterName: "Semester 1", Courses: [] }
    ];
    //Hooks
    const [plan, setPlan] = useState<Semester[]>(load());
    const [currentSemesterID, setCurrentSemesterID]= useState("");
    const [currentCourseID, setCurrentCourseID] = useState("");
    const [modalOpen, setOpen] = useState(true); // For welcome message
    const [semNum, setSemNum] = useState(2);
    const [addCourseData, setAddFormData] = useState<Course>({
        ID: "aslkdjfldskjf",
        School: "CISC",
        ClassID: 30,
        CourseName: "Automata",
        Desc: "Whatever",
        Credits: 3
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

    const handleEditClick = (event: React.MouseEvent, cour: Course)=> {
        event.preventDefault();

        const courseValues = {
            ID: currentCourseID,
            School: cour.School,
            ClassID: cour.ClassID,
            CourseName: cour.CourseName,
            Desc: cour.Desc,
            Credits: cour.Credits
        };

        setEditCourseData(courseValues);
        setCurrentCourseID("");
    };

    const handleEditCourseSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newPlan = plan.map(inner =>{ 
            return {...inner, Courses: [...inner.Courses]}; 
        });
        const semIndex = plan.findIndex((semester: Semester) => semester.ID === currentSemesterID);

        const editedCourse:Course = {
            ID: currentCourseID,
            School: editCourseData.School,
            ClassID: editCourseData.ClassID,
            CourseName: editCourseData.CourseName,
            Desc: editCourseData.Desc,
            Credits: editCourseData.Credits
        };

        const courseIndex = plan[semIndex].Courses.findIndex((course: Course)=> course.ID === currentCourseID);
        newPlan[semIndex].Courses[courseIndex] = editedCourse;
        setPlan(newPlan);
        setCurrentCourseID("");
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
            return {...inner, Courses: [...inner.Courses]}; 
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
        setCurrentCourseID("");
    };

    const handleCancelClick = () => {
        setCurrentCourseID("");
    };

    const handleDeleteClick = (event: React.MouseEvent, cour: Course) => {
        event.preventDefault();
        const newPlan = plan.map(inner =>{ 
            return {...inner, Courses: [...inner.Courses]}; 
        });
        const semIndex = plan.findIndex(semester => semester.ID === currentSemesterID);
        const courIndex = plan[semIndex].Courses.findIndex(course => course.ID === cour.ID);


        newPlan[semIndex].Courses.splice(courIndex, 1);        
        setPlan(newPlan);
        setCurrentCourseID("");
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

    function save(){ 
        localStorage.setItem(LOCAL_STORAGE_PLAN, JSON.stringify(plan));
    }

    function load() : Semester[] {
        const rawPlan: string | null = localStorage.getItem(LOCAL_STORAGE_PLAN);
        if (rawPlan === null) {
            return [...INITIAL_PLAN];
        } else {
            return JSON.parse(rawPlan);
        }
    }

    function clearSave(){
        localStorage.setItem(LOCAL_STORAGE_PLAN, JSON.stringify(INITIAL_PLAN));
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
                        onClick= {() => clearClasses(plan)}>Clear All Classes From Selected Semester</button>
                    <button className = "edit-semester" type = "button" 
                        onClick= {() => save()}>Save Plan</button>
                    <button className = "edit-semester" type = "button" 
                        onClick= {() => clearSave()}>Clear Current Save state</button>
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
                                            <Fragment key={cour.ID}>
                                                { cour.ID === currentCourseID ? 
                                                    <MutableRow 
                                                        editCourseData = {editCourseData} 
                                                        handleEditCourseChange = {handleEditCourseChange}
                                                        handleCancelClick = {handleCancelClick}
                                                    /> 
                                                    :  
                                                    <ReadOnlyRow 
                                                        cour = {cour}
                                                        handleEditClick={handleEditClick}
                                                        handleDeleteClick={handleDeleteClick}
                                                        setCurrentCourseID={setCurrentCourseID}
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
                    defaultValue={addCourseData.School}
                    required= {true}
                    placeholder = "Enter a School."
                    onChange={handleAddCourseChange}
                />
                <input 
                    type = "number"
                    name = "ClassID"
                    defaultValue={addCourseData.ClassID}
                    required = {true}
                    placeholder = "Enter a Class ID."
                    onChange={handleAddCourseChange}
                />
                <input 
                    type ="text"
                    name = "CourseName"
                    defaultValue={addCourseData.CourseName}
                    required = {true}
                    placeholder = "Enter a Course Name."
                    onChange={handleAddCourseChange}
                />
                <input 
                    type ="text"
                    name = "Desc"
                    defaultValue={addCourseData.Desc}
                    required = {true}
                    placeholder = "Enter a Class Description."
                    onChange={handleAddCourseChange}
                />
                <input 
                    type ="number"
                    name = "Credits"
                    defaultValue={addCourseData.Credits}
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