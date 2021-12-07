import React, { Fragment } from "react";
import { Accordion } from "react-bootstrap";
import { handleEditCourseChange, handleEditClick, handleEditCourseSubmit} from "./EditCourse";
import { addSemester, deleteSemester, clearSemesters, clearClasses } from "./SemesterFunctions";
import { save, clearSave } from "./SaveAndLoad";
import { refreshPage } from "./WelcomeMessage";
import ReadOnlyRow from "./ReadOnlyRow";
import MutableRow from "./MutableRow";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";

const handleDeleteClick = (event: React.MouseEvent, cour: Course, plan : Semester[], currentSemesterID: string,
    setCurrentCourseID: React.Dispatch<React.SetStateAction<string>>, setPlan: React.Dispatch<React.SetStateAction<Semester[]>>) => {
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

const handleCancelClick = (setCurrentCourseID: React.Dispatch<React.SetStateAction<string>>) => {
    setCurrentCourseID("");
};

export const PlanViewer = ({plan, setPlan, currentSemesterID, setCurrentSemesterID, currentCourseID, 
    setCurrentCourseID, editCourseData, setEditCourseData, semNum, setSemNum}: 
    {plan: Semester[], setPlan: React.Dispatch<React.SetStateAction<Semester[]>>,
    currentSemesterID: string, setCurrentSemesterID: React.Dispatch<React.SetStateAction<string>>,
    currentCourseID: string, setCurrentCourseID: React.Dispatch<React.SetStateAction<string>>,
    editCourseData: Course, setEditCourseData: React.Dispatch<React.SetStateAction<Course>>,
    semNum: number, setSemNum: React.Dispatch<React.SetStateAction<number>>}): JSX.Element => {
    return(
        <div className = "plan-viewer">
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
                            <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=> handleEditCourseSubmit(event, currentSemesterID, currentCourseID, plan, setPlan, setCurrentCourseID, editCourseData)}>
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
                                                { () => 
                                                    cour.ID === currentCourseID ? 
                                                        <MutableRow 
                                                            editCourseData = {editCourseData} 
                                                            handleEditCourseChange = {() => handleEditCourseChange}
                                                            handleCancelClick = {() => handleCancelClick}
                                                        /> 
                                                        :  
                                                        <ReadOnlyRow 
                                                            cour = {cour}
                                                            handleEditClick={(event: React.MouseEvent) => handleEditClick(event, cour, currentCourseID, setCurrentCourseID, setEditCourseData)}
                                                            handleDeleteClick={() => handleDeleteClick}
                                                            currentCourseID= {currentCourseID}
                                                            setCurrentCourseID={setCurrentCourseID}
                                                            setEditCourseData={setEditCourseData}
                                                        />
                                                } 
                                            </Fragment>
                                        )}
                                    </tbody>
                                </table>
                                <button role= "clear-classes" className = "edit-semester" type = "button" 
                                    onClick= {() => clearClasses(plan, setPlan, currentSemesterID, setCurrentCourseID)}>Clear Classes</button>
                                <button role= "delete-semester" className = "edit-semester" type = "button" 
                                    onClick= {() => deleteSemester(plan, setPlan, currentSemesterID, setCurrentSemesterID, semNum, setSemNum)}>Delete Semester</button>
                            </form>
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>
        </div>
    );
};