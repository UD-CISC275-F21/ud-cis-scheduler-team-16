import React, { useState, Fragment } from "react";
import { Accordion } from "react-bootstrap";
import  Modal from "react-modal";
import { nanoid } from "nanoid";
import { editCourseData, handleEditCourseChange, handleEditClick, handleEditCourseSubmit} from "./components/EditCourse";
import { save, load, clearSave } from "./components/SaveAndLoad";
import { addSemester, deleteSemester, clearSemesters, clearClasses } from "./components/SemesterFunctions";
import { addCourseData, handleAddCourseChange, handleAddCourseSubmit } from "./components/AddCourse";
import ReadOnlyRow from "./components/ReadOnlyRow";
import MutableRow from "./components/MutableRow";
import { WriteMessage } from "./components/WelcomeMessage";
import { customModal } from "./components/WelcomeMessage";
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

    //Functions

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
                    <button role = "add-semester" className = "edit-semester" type = "button" 
                        onClick= {() => addSemester(plan, setPlan(plan))}>Add Semester</button>
                    <button role = "clear-semesters" className = "edit-semester" type = "button" 
                        onClick= {() => clearSemesters(plan, setPlan(plan), setCurrentSemesterID(currentSemesterID))}>Clear All Semesters</button>
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
                            <form onSubmit={handleEditCourseSubmit(event, currentSemesterID, currentCourseID, 
                                plan, setPlan(plan), setCurrentCourseID(currentCourseID))}>
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
                                                        handleEditClick={handleEditClick(event, cour, currentCourseID, setCurrentCourseID(currentCourseID))}
                                                        handleDeleteClick={handleDeleteClick}
                                                        setCurrentCourseID={setCurrentCourseID}
                                                    />
                                                } 
                                            </Fragment>
                                        )}
                                    </tbody>
                                </table>
                                <button role= "clear-classes" className = "edit-semester" type = "button" 
                                    onClick= {() => clearClasses(plan, setPlan(plan), currentSemesterID, setCurrentSemesterID(currentSemesterID))}>Clear Classes</button>
                                <button role= "delete-semester" className = "edit-semester" type = "button" 
                                    onClick= {() => deleteSemester(plan, setPlan(plan), currentSemesterID, setCurrentSemesterID(currentSemesterID))}>Delete Semester</button>
                            </form>
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>
            <form role = "add-course" onSubmit={handleAddCourseSubmit(event, plan, setPlan(plan), currentSemesterID, 
                setCurrentCourseID(nanoid()))}>
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