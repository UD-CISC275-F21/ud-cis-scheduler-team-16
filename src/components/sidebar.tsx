import React from "react";
import { Course } from "../interfaces/course"
import { Accordion } from "react-bootstrap";
import courses from "../assets/course.json"
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import "../App.css";


export interface LoadSidebarProps {
    "School": string,
    "ClassID": number,
    "CourseName": string,
    "Desc": string,
    "Credits": number
}

const LoadSidebarContent = ({School}: LoadSidebarProps): JSX.Element => {
    return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{School}</h5>
                    <div className="row">
                        <ul>
                        { courses.map ( ({School, ClassID, CourseName, Desc, Credits}: LoadSidebarProps) =>
                            <li>{courses.School}</li>
                            <li>{courses.ClassID}</li>
                            <li>{courses.School}</li>
                            <li>{courses.School}</li>
                            <li>{courses.School}</li>
                        )}
                        </ul>
                    </div>
                    <div className="col-4">
                        <button className="add-class"></button>
                    </div>  
                </div>
            </div>  
        
    );
};

export const DisplaySidebar = ({School}: LoadSidebarProps): JSX.Element => {

    return(
        <div>
            <Accordion>
                <AccordionItem eventKey= "0">
                    <AccordionHeader>{School}</AccordionHeader>
                    <AccordionBody>
                        <LoadSidebarContent School={School}></LoadSidebarContent>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
};


                        