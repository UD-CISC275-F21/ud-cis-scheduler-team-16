import React, { useState } from "react";
import data from "./semester-list.json";
import { Course } from "./course";
import { nanoid } from "nanoid";

export const customModalSemester = {
    content: {
        background: "grey",
        top: "70%",
        left: "70%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

export const AddSemester = ({openModal}: {openModal: VoidFunction}): JSX.Element =>  {

    const[amount, setAmount] = useState(0);
    const[semesters, setSemester]= useState(data);
    const [newSemCourseData, setNewSemCourseData] = useState<Course>({
        ID: "",
        School: "",
        ClassID: 0,
        CourseName: "",
        Desc: "",
        Credits: 0
    });


    const getAmount = (amount: number) => {
        console.warn(amount)
        setAmount(amount)
    }

    const handleNewSemCourse = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newSemesterCourse = {
            ID: nanoid(),
            School: newSemCourseData.School,
            ClassID: newSemCourseData.ClassID,
            CourseName: newSemCourseData.CourseName,
            Desc: newSemCourseData.Desc,
            Credits: newSemCourseData.Credits
        };

        const newSemCourses = [...semesters, newSemesterCourse];
        setSemester(newSemesterCourse);
    };

    const makeCourses = (amount: number) => {
        for (let i = 0; i <= amount; i++) {
            return(
                <form onSubmit={handleNewSemCourse}>
                    <input 
                        type ="text"
                        name = "School"
                        required= {true}
                        placeholder = "Enter a School."
                        onChange={handleNewSemCourse}
                    />
                    <input 
                        type = "number"
                        name = "ClassID"
                        required = {true}
                        placeholder = "Enter a Class ID."
                        onChange={handleNewSemCourse}
                    />
                    <input 
                        type ="text"
                        name = "CourseName"
                        required = {true}
                        placeholder = "Enter a Course Name."
                        onChange={handleNewSemCourse}
                    />
                    <input 
                        type ="text"
                        name = "Desc"
                        required = {true}
                        placeholder = "Enter a Class Description."
                         onChange={handleNewSemCourse}
                    />
                    <input 
                        type ="number"
                        name = "Credits"
                        required = {true}
                        placeholder = "Enter a Credit Amount."
                        onChange={handleNewSemCourse}
                    />
                </form>  
            );   
        }
    }

    return(
        <div>
            <p>Please put how many classes you want to take this semester.</p>
            <input type="number" onChange={getAmount}/>
            
        </div>
    );
}