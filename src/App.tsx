import React, { useState, Fragment } from "react";
import { Accordion } from "react-bootstrap";
import  Modal from "react-modal";
import { handleEditCourseChange, handleEditClick, handleEditCourseSubmit} from "./components/EditCourse";
import { save, load, clearSave } from "./components/SaveAndLoad";
import { addSemester, deleteSemester, clearSemesters, clearClasses } from "./components/SemesterFunctions";
import { handleAddCourseChange, handleAddCourseSubmit } from "./components/AddCourse";
import ReadOnlyRow from "./components/ReadOnlyRow";
import MutableRow from "./components/MutableRow";
import { WriteMessage, customModal, refreshPage } from "./components/WelcomeMessage";
import { Course } from "./interfaces/course";
import { Semester } from "./interfaces/semester";
//import { ProSidebar, Menu, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";
//import { loadSidebar } from "./components/sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

/* Resources that assisted in the making of this:
1. Basis of the semester table: https://youtu.be/dYjdzpZv5yc
2. NanoID description: https://www.npmjs.com/package/nanoid
3. Modal: https://www.npmjs.com/package/react-modal
*/

const App = () : JSX.Element => {

    //Hooks
    const [plan, setPlan] = useState<Semester[]>(load());
    const [currentSemesterID, setCurrentSemesterID]= useState("");
    const [currentCourseID, setCurrentCourseID] = useState("");
    const [modalOpen, setOpen] = useState(true); // For welcome message
    const [semNum, setSemNum] = useState(2);
    const [addCourseData, setAddFormData] = useState<Course>({
        ID: "someid",
        School: "Department",
        ClassID: 0,
        CourseName: "Course Name",
        Desc: "Some Description",
        Credits: 0
    });
    const [editCourseData, setEditCourseData] = useState<Course>
    ({
        ID: "",
        School: "",
        ClassID: 0,
        CourseName: "",
        Desc: "",
        Credits: 0
    });

    //Functions

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
    
    const handleCancelClick = () => {
        setCurrentCourseID("");
    };

    //Display 

    return(
        <div className = "App">
            <Modal
                isOpen={modalOpen}
                onRequestClose={() => setOpen(false)}
                contentLabel="Welcome Message"
                style={customModal}
            >
                <WriteMessage closeModal = {() => setOpen(false)} ></WriteMessage>
            </Modal> 
            <div className="row">
                <div className="col-8">
                    <h1 className="header"><button className="refresh-logo" onClick={refreshPage}></button> UD CIS Scheduler</h1>
                    <br />
                    <button role = "add-semester" className = "edit-semester" type = "button" 
                        onClick= {() => addSemester(plan, setPlan, semNum, setSemNum)}>Add Semester</button>
                    <button role = "clear-semesters" className = "edit-semester" type = "button" 
                        onClick= {() => clearSemesters(plan, setPlan, setCurrentSemesterID, setSemNum)}>Clear All Semesters</button>
                    <button role = "save-plan" className = "edit-semester" type = "button" 
                        onClick= {() => save(plan)}>Save Plan</button>
                    <button role = "clear-plan" className = "edit-semester" type = "button" 
                        onClick= {() => clearSave()}>Clear Current Save state</button>
                    <br />
                </div>
            </div>
            <Accordion role= "semester-display" flush>
                { plan.map ( (sem: Semester) =>
                    <Accordion.Item eventKey= {sem.ID}  key = {sem.ID}>
                        <Accordion.Header onClick= {() => setCurrentSemesterID(sem.ID)}>{sem.SemesterName}</Accordion.Header>
                        <Accordion.Body>
                            <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => 
                                handleEditCourseSubmit(event, currentSemesterID, currentCourseID, 
                                    plan, setPlan, setCurrentCourseID, editCourseData)}>
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
                                                        handleEditCourseChange = {() => handleEditCourseChange}
                                                        handleCancelClick = {handleCancelClick}
                                                    /> 
                                                    :  
                                                    <ReadOnlyRow 
                                                        cour = {cour}
                                                        handleEditClick={(event: React.MouseEvent) => handleEditClick(event, cour, currentCourseID, setCurrentCourseID, setEditCourseData)}
                                                        handleDeleteClick={handleDeleteClick}
                                                        setCurrentCourseID={setCurrentCourseID}
                                                    />
                                                } 
                                            </Fragment>
                                        )}
                                    </tbody>
                                </table>
                                <button role= "clear-classes" className = "edit-semester" type = "button" 
                                    onClick= {() => clearClasses(plan, setPlan, currentSemesterID, setCurrentSemesterID)}>Clear Classes</button>
                                <button role= "delete-semester" className = "edit-semester" type = "button" 
                                    onClick= {() => deleteSemester(plan, setPlan, currentSemesterID, setCurrentSemesterID, semNum, setSemNum)}>Delete Semester</button>
                            </form>
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>
            <form role = "add-course" onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleAddCourseSubmit(event, plan, setPlan, currentSemesterID, setCurrentCourseID, addCourseData)}>
                <input 
                    type ="text"
                    name = "School"
                    defaultValue={addCourseData.School}
                    required= {true}
                    placeholder = "Enter a School."
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleAddCourseChange(event, addCourseData, setAddFormData)}
                />
                <input 
                    type = "number"
                    name = "ClassID"
                    defaultValue={addCourseData.ClassID}
                    required = {true}
                    placeholder = "Enter a Class ID."
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleAddCourseChange(event, addCourseData, setAddFormData)}
                />
                <input 
                    type ="text"
                    name = "CourseName"
                    defaultValue={addCourseData.CourseName}
                    required = {true}
                    placeholder = "Enter a Course Name."
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleAddCourseChange(event, addCourseData, setAddFormData)}
                />
                <input 
                    type ="text"
                    name = "Desc"
                    defaultValue={addCourseData.Desc}
                    required = {true}
                    placeholder = "Enter a Class Description."
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleAddCourseChange(event, addCourseData, setAddFormData)}
                />
                <input 
                    type ="number"
                    name = "Credits"
                    defaultValue={addCourseData.Credits}
                    required = {true}
                    placeholder = "Enter a Credit Amount."
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleAddCourseChange(event, addCourseData, setAddFormData)}
                />
                <button type="submit">Add Course</button>
            </form>
        </div>
        
    );
};

/* sidebar in progress
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

*/
export default App;