import React from "react";
import { Course } from "../interfaces/course"
import { Accordion } from "react-bootstrap";
import data from "../assets/course.json"
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

function DepartmentChecker(acour: SidebarProp, Department: string): boolean {
    let result = false; 
    data.map( acour =>{
        if(acour.School === Department){
            result = true;
        }
        else{
            result = false;
        }
    });
    return result;
}

export const DisplaySidebar = (Department : string): JSX.Element => {

    return(
        <div>
            <Accordion role = "course-list" flush>
                <AccordionItem eventKey= "0">
                    <AccordionHeader>{Department}</AccordionHeader>
                    <AccordionBody>
                    { data.map ( (acour: SidebarProp) =>
                        { DepartmentChecker(acour, Department) === true ?
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        
                                            <ul>
                                                <li>{acour.School}</li>
                                                <li>{acour.School}</li>
                                                <li>{acour.School}</li>
                                                <li>{acour.School}</li>
                                                <li>{acour.School}</li>
                                            </ul>
                                    </div>
                                    <div className="col-4">
                                        <button className="add-class"></button>
                                    </div>  
                                </div>
                            </div>
                            :
                            <p></p>
                        }
                    )}
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
};


                        