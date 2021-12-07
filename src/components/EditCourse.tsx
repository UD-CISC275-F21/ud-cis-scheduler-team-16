import React from "react";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";

export const handleEditCourseChange = (event: React.ChangeEvent<HTMLInputElement>, editCourseData: Course,
    setEditCourseData: React.Dispatch<React.SetStateAction<Course>>): void => {
    event.preventDefault();

    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newCourseData = {...editCourseData, [fieldName]: fieldValue};

    setEditCourseData(newCourseData);
};

export const handleEditClick = (event: React.MouseEvent, cour: Course, currentCourseID : string, 
    setCurrentCourseID: React.Dispatch<React.SetStateAction<string>>, setEditCourseData: React.Dispatch<React.SetStateAction<Course>>): void => {
    event.preventDefault();

    const courseValues = {
        ID: currentCourseID,
        School: cour.School,
        ClassID: cour.ClassID,
        CourseName: cour.CourseName,
        Desc: cour.Desc,
        Credits: cour.Credits
    };

    setEditCourseData(courseValues);
    setCurrentCourseID("");
};

export const handleEditCourseSubmit = (event: React.FormEvent<HTMLFormElement>, currentSemesterID: string,
    currentCourseID: string, plan: Semester[], setPlan: React.Dispatch<React.SetStateAction<Semester[]>>, 
    setCurrentCourseID: React.Dispatch<React.SetStateAction<string>>, editCourseData: Course): void => {
    event.preventDefault();
    const newPlan = plan.map(inner =>{ 
        return {...inner, Courses: [...inner.Courses]}; 
    });
    const semIndex = plan.findIndex((semester: Semester) => semester.ID === currentSemesterID);

    const editedCourse:Course = {
        ID: currentCourseID,
        School: editCourseData.School,
        ClassID: editCourseData.ClassID,
        CourseName: editCourseData.CourseName,
        Desc: editCourseData.Desc,
        Credits: editCourseData.Credits
    };

    const courseIndex = plan[semIndex].Courses.findIndex((course: Course)=> course.ID === currentCourseID);
    newPlan[semIndex].Courses[courseIndex] = editedCourse;
    setPlan(newPlan);
    setCurrentCourseID("");
};

