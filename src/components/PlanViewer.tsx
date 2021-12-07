import React, { Dispatch, Fragment } from "react";
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

export const PlanViewer = () => {
    return(
        <div className = "plan-viewer">
            <div className="row">
                <div className="col-8">
                    <h1 className="header"><button className="refresh-logo" onClick={refreshPage}></button> UD CIS Scheduler</h1>
                    <br />
                    <button role = "add-semester" className = "edit-semester" type = "button" 
                        onClick= {(plan: Semester[], setPlan: React.Dispatch<React.SetStateAction<Semester[]>> , semNum: number, setSemNum: React.Dispatch<React.SetStateAction<number>> )=> 
                        addSemester(plan, setPlan, semNum, setSemNum)}>Add Semester</button>
                    <button role = "clear-semesters" className = "edit-semester" type = "button" 
                        onClick= {(plan: Semester[], setPlan: React.Dispatch<React.SetStateAction<Semester[]>>, setCurrentSemesterID:  React.Dispatch<React.SetStateAction<string>>, setSemNum: React.Dispatch<React.SetStateAction<number>>) => 
                        clearSemesters(plan, setPlan, setCurrentSemesterID, setSemNum)}>Clear All Semesters</button>
                    <button role = "save-plan" className = "edit-semester" type = "button" 
                        onClick= {(plan : Semester[]) => save(plan)}>Save Plan</button>
                    <button role = "clear-plan" className = "edit-semester" type = "button" 
                        onClick= {() => clearSave()}>Clear Current Save state</button>
                    <br />
                </div>
            </div>
            <Accordion role= "semester-display" flush>
                { (plan: Semester[]) => plan.map ( (sem: Semester) =>
                    <Accordion.Item eventKey= {sem.ID}  key = {sem.ID}>
                        <Accordion.Header onClick= {(setCurrentSemesterID:  React.Dispatch<React.SetStateAction<string>>) =>
                             setCurrentSemesterID(sem.ID)}>{sem.SemesterName}</Accordion.Header>
                        <Accordion.Body>
                            <form onSubmit={(event: React.FormEvent<HTMLFormElement>, currentSemesterID: string, currentCourseID: string, setPlan: React.Dispatch<React.SetStateAction<Semester[]>>, setCurrentCourseID: React.Dispatch<React.SetStateAction<string>>, editCourseData: Course) => 
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
                                                { (currentCourseID: string, editCourseData: Course, setCurrentCourseID: React.Dispatch<React.SetStateAction<string>>, setEditCourseData: React.Dispatch<React.SetStateAction<Course>>) => 
                                                cour.ID === currentCourseID ? 
                                                    <MutableRow 
                                                        editCourseData = {editCourseData} 
                                                        handleEditCourseChange = {() => handleEditCourseChange}
                                                        handleCancelClick = {() => handleCancelClick}
                                                    /> 
                                                    :  
                                                    <ReadOnlyRow 
                                                        cour = {cour}
                                                        handleEditClick={(event: React.MouseEvent, cour: Course, currentCourseID: string, setCurrentCourseID: React.Dispatch<React.SetStateAction<string>>, setEditCourseData: React.Dispatch<React.SetStateAction<Course>>) => 
                                                            handleEditClick(event, cour, currentCourseID, setCurrentCourseID, setEditCourseData)}
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
                                    onClick= {(plan: Semester[], setPlan: React.Dispatch<React.SetStateAction<Semester[]>>, currentSemesterID: string, setCurrentSemesterID: React.Dispatch<React.SetStateAction<string>>) => 
                                    clearClasses(plan, setPlan, currentSemesterID, setCurrentSemesterID)}>Clear Classes</button>
                                <button role= "delete-semester" className = "edit-semester" type = "button" 
                                    onClick= {(plan: Semester[], setPlan: React.Dispatch<React.SetStateAction<Semester[]>>, currentSemesterID: string, setCurrentSemesterID: React.Dispatch<React.SetStateAction<string>>, semNum : number, setSemNum: React.Dispatch<React.SetStateAction<number>>) => 
                                    deleteSemester(plan, setPlan, currentSemesterID, setCurrentSemesterID, semNum, setSemNum)}>Delete Semester</button>
                            </form>
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>
        </div>
    );
};