import React from "react";
import { Accordion } from "react-bootstrap";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import "../App.css";
import App from "../App";

export interface LoadSidebarProps {
    schoolName: string
}

const LoadSidebarContent = ({schoolName}: LoadSidebarProps): JSX.Element => {
    return(
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-8">
                        <h5 className="card-title">{schoolName}</h5>
                        <p className="card-text">{schoolName}</p>
                    </div>
                    <div className="col-4">
                        <button className="add-class"></button>
                    </div>  
                </div>
            </div>
        </div>
    );
};

/*const countCourses = (schoolName: string) => {
    let count = 0;
    const courses = JSON.parse("class-list");
    for(let tempID = 0; courses.length>=tempID; tempID++){
        if(courses[count].School === schoolName){
            count++;
        }
    }
        
    return count;
};*/


export const LoadSidebar = ({schoolName}: LoadSidebarProps): JSX.Element => {

    return(
        <div>
            <Accordion>
                <AccordionItem eventKey= "0">
                    <AccordionHeader>{schoolName}</AccordionHeader>
                    <AccordionBody>
                        <LoadSidebarContent schoolName={schoolName}></LoadSidebarContent>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
};


                        