import { Semester } from "../interfaces/semester";
import { nanoid } from "nanoid";


export function addSemester(plan : Semester[], setPlan: React.Dispatch<React.SetStateAction<Semester[]>>, 
    semNum: number, setSemNum : React.Dispatch<React.SetStateAction<number>>): void{
    const newSemester ={
        ID: nanoid(),
        SemesterName: "Semester" + semNum,
        Courses: []
    };

    setSemNum(semNum + 1);
    setPlan([...plan, newSemester]);
}

export function deleteSemester(plan : Semester[], setPlan : React.Dispatch<React.SetStateAction<Semester[]>>,
    currentSemesterID: string, setCurrentSemesterID: React.Dispatch<React.SetStateAction<string>>, 
    semNum: number, setSemNum : React.Dispatch<React.SetStateAction<number>>): void{
    const newPlan = plan.map(inner =>{ 
        return {...inner}; 
    });
    const index = plan.findIndex((semester: Semester) => semester.ID === currentSemesterID);

    //Note for later, add something in here that updates the other semester number when this is called

    newPlan.splice(index, 1);
    setPlan(newPlan);
    setCurrentSemesterID("");
    setSemNum(semNum-1);
}

export function clearSemesters(plan : Semester[], setPlan: React.Dispatch<React.SetStateAction<Semester[]>>, 
    setCurrentSemesterID: React.Dispatch<React.SetStateAction<string>>, setSemNum : React.Dispatch<React.SetStateAction<number>> ): void{
    const newPlan = plan.map(inner =>{ 
        return {...inner}; 
    });
    newPlan.splice(0, newPlan.length);
    
    setPlan(newPlan);
    setCurrentSemesterID("");
    setSemNum(1);
}

export function clearClasses(plan : Semester[], setPlan : React.Dispatch<React.SetStateAction<Semester[]>>,
    currentSemesterID: string, setCurrentCourseID: React.Dispatch<React.SetStateAction<string>>): void { // Clears all classes from a semester
    const newPlan = plan.map(inner =>{ 
        return {...inner}; 
    });
    const index = plan.findIndex((semester: Semester) => semester.ID === currentSemesterID);
    
    newPlan[index].Courses = [];
    setPlan(newPlan);
    setCurrentCourseID("");
}