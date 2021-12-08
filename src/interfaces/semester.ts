import { Course } from "./course";

export interface Semester{
    ID: string,
    SemesterName: string,
    Courses: Course[]
}