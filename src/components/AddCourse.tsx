import React from "react";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";

export const handleAddCourseClick = (event: React.MouseEvent, plan: Semester[], setPlan: React.Dispatch<React.SetStateAction<Semester[]>>, 
    currentSemesterID: string, setCurrentCourseID: React.Dispatch<React.SetStateAction<string>>, addCourseData: Course): void => {
    event.preventDefault();
    const newPlan = plan.map(inner =>{ 
        return {...inner, Courses: [...inner.Courses]}; 
    });

    const semIndex = plan.findIndex((semester: Semester) => semester.ID === currentSemesterID);
    
    const newCourse = {
        ID: addCourseData.ID,
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