import React from "react";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { handleAddCourseChange, handleAddCourseSubmit } from "./AddCourse";

export const AddCourseBar = ({plan, setPlan, currentSemesterID, addCourseData, setAddFormData, setCurrentCourseID} : 
    {plan: Semester[], setPlan: React.Dispatch<React.SetStateAction<Semester[]>>,
    currentSemesterID: string, addCourseData: Course, setAddFormData: React.Dispatch<React.SetStateAction<Course>>,
    setCurrentCourseID: React.Dispatch<React.SetStateAction<string>>}): JSX.Element => {
    return(
        <form role = "add-course" onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleAddCourseSubmit(event, plan, setPlan, currentSemesterID, setCurrentCourseID, addCourseData)}>
            <input 
                type ="text"
                name = "School"
                defaultValue={addCourseData.School}
                required= {true}
                placeholder = "Enter a School."
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleAddCourseChange(event, addCourseData, setAddFormData)}
            />
            <input 
                type = "number"
                name = "ClassID"
                defaultValue={addCourseData.ClassID}
                required = {true}
                placeholder = "Enter a Class ID."
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleAddCourseChange(event, addCourseData, setAddFormData)}
            />
            <input 
                type ="text"
                name = "CourseName"
                defaultValue={addCourseData.CourseName}
                required = {true}
                placeholder = "Enter a Course Name."
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleAddCourseChange(event, addCourseData, setAddFormData)}
            />
            <input 
                type ="text"
                name = "Desc"
                defaultValue={addCourseData.Desc}
                required = {true}
                placeholder = "Enter a Class Description."
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleAddCourseChange(event, addCourseData, setAddFormData)}
            />
            <input 
                type ="number"
                name = "Credits"
                defaultValue={addCourseData.Credits}
                required = {true}
                placeholder = "Enter a Credit Amount."
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleAddCourseChange(event, addCourseData, setAddFormData)}
            />
            <button type="submit">Add Course</button>
        </form>
    );
};