import { useState } from "react";
import { Semester } from "../interfaces/semester";

export const [plan, setPlan] = useState<Semester[]>(load());

export const LOCAL_STORAGE_PLAN = "fouryearplanner_plan";
export const INITIAL_PLAN: Semester[] = [
    { ID: "0", SemesterName: "Semester 1", Courses: [] }
];

export function save(){ 
    localStorage.setItem(LOCAL_STORAGE_PLAN, JSON.stringify(plan));
    alert("Plan saved! This plan will be loaded whenever you load back into this page.");
}

export function load() : Semester[] {
    const rawPlan: string | null = localStorage.getItem(LOCAL_STORAGE_PLAN);
    if (rawPlan === null) {
        return [...INITIAL_PLAN];
    } else {
        return JSON.parse(rawPlan);
    }
}

export function clearSave(){
    localStorage.setItem(LOCAL_STORAGE_PLAN, JSON.stringify(INITIAL_PLAN));
    alert("Save cleared! Refresh your page to start again.");
}