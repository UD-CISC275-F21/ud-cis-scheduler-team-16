import React from "react";
import { Semester } from "../interfaces/semester";
import { nanoid } from "nanoid";
import { Course } from "../interfaces/course";
import { Accordion } from "react-bootstrap";
import { handleAddCourseChange, handleAddCourseClick } from "./AddCourse";
import data from "../assets/course.json";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
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

const addedcourse : Course = {ID : nanoid(), School: "",ClassID: 0, CourseName: "", Desc: "", Credits: 0};

function DepartmentChecker(acour: SidebarProp, Department: string): boolean {
    let result = false; 
    if(acour.School === Department){
        result = true;
    }else{
        result = false;
    }
    return result; 
}

function BlankUpdater(acour: SidebarProp, addedcourse: Course){
    addedcourse.School = acour.School;
    addedcourse.ClassID = acour.ClassID;
    addedcourse.CourseName = acour.CourseName;
    addedcourse.Desc = acour.Desc;
    addedcourse.Credits = acour.Credits;
}

export const DisplayDepartment = ({Department, setAddFormData, plan, setPlan, currentSemesterID, setCurrentCourseID}: 
    {Department: string, setAddFormData: React.Dispatch<React.SetStateAction<Course>>, plan : Semester[], setPlan: React.Dispatch<React.SetStateAction<Semester[]>>, currentSemesterID: string, setCurrentCourseID: React.Dispatch<React.SetStateAction<string>>}): JSX.Element => {
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
                                            {BlankUpdater(acour, addedcourse )}
                                            {handleAddCourseChange(event, addedcourse, setAddFormData)}
                                            <button className="add-class"
                                                onClick={(event: React.MouseEvent) => handleAddCourseClick(event, plan, setPlan, currentSemesterID, setCurrentCourseID, addedcourse)}>
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