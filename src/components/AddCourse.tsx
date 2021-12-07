import React from "react";
import { nanoid } from "nanoid";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";

export const handleAddCourseChange = (event: React.ChangeEvent<HTMLInputElement>, 
    addCourseData : Course, setAddFormData: React.Dispatch<React.SetStateAction<Course>>) => {
    event.preventDefault();

    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const newCourseData = { ...addCourseData, [fieldName]: fieldValue};

    setAddFormData(newCourseData);
};

export const handleAddCourseSubmit = (event: React.FormEvent<HTMLFormElement>, plan: Semester[], setPlan: React.Dispatch<React.SetStateAction<Semester[]>>, 
    currentSemesterID: string, setCurrentCourseID: React.Dispatch<React.SetStateAction<string>>, addCourseData: Course) => {
    event.preventDefault();
    const newPlan = plan.map(inner =>{ 
        return {...inner, Courses: [...inner.Courses]}; 
    });

    const semIndex = plan.findIndex((semester: Semester) => semester.ID === currentSemesterID);
    
    const newCourse = {
        ID: nanoid(),
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