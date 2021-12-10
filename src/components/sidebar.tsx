import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Semester } from "../interfaces/semester";
import { nanoid } from "nanoid";
import { Course } from "../interfaces/course";
import { handleAddCourseClick } from "./AddCourse";
import data from "../assets/course.json";
import "../App.css";

export interface SidebarProp {
    School: string,
    ClassID: number,
    CourseName: string,
    Desc: string,
    PreReq: string,
    CoReq: string,
    Credits: number
}

function DepartmentChecker(acour: SidebarProp, Department: string): boolean {
    let result = false; 
    if(acour.School === Department){
        result = true;
    }else{
        result = false;
    }
    return result; 
}

function BlankCreator(): Course{
    const addedcourse: Course = {ID: nanoid(), School: "", ClassID: 0, CourseName: "", Desc: "", Credits: 0};
    return addedcourse;
}

function BlankUpdater(acour: SidebarProp, addedcourse: Course): Course{
    addedcourse.School = acour.School;
    addedcourse.ClassID = acour.ClassID;
    addedcourse.CourseName = acour.CourseName;
    addedcourse.Desc = acour.Desc;
    addedcourse.Credits = acour.Credits;
    return addedcourse;
}

export const DisplayDepartment = ({Department, plan, setPlan, currentSemesterID, setCurrentCourseID}: 
    {Department: string, plan : Semester[], setPlan: React.Dispatch<React.SetStateAction<Semester[]>>, currentSemesterID: string, setCurrentCourseID: React.Dispatch<React.SetStateAction<string>>}): JSX.Element => {
    return(
        <div>
            <Accordion role = "course-list" flush>
                <AccordionItem eventKey= "0">
                    <AccordionHeader>{Department}</AccordionHeader>
                    <AccordionBody>
                        { data.map ( (acour: SidebarProp) =>{ 
                            return DepartmentChecker(acour, Department) === true ?
                                <div className="card" key = {acour.School + acour.ClassID + acour.CourseName}>
                                    <div className="card-body">
                                        <div className="row">
                                            <ul>
                                                <li>{acour.School}{acour.ClassID}</li>
                                                <li>{acour.CourseName}</li>
                                                <li>{acour.Desc}</li>
                                                <li>Credits: {acour.Credits}</li>
                                            </ul>
                                        </div>
                                        <div className="col-4">
                                            <button className="add-class" 
                                                onClick={(event: React.MouseEvent) => handleAddCourseClick(event, plan, setPlan, currentSemesterID, setCurrentCourseID, BlankUpdater(acour, BlankCreator()))}>
                                            </button>
                                        </div>  
                                    </div>
                                </div>
                                :
                                null;
                        }
                        )}
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
};