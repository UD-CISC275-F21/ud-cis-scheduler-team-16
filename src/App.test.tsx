import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";


//Below tests check if everything renders.

test("renders UD CIS Scheduler text", () => {
    render(<App />);
    const linkElement = screen.getByText(/UD CIS Scheduler/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders Accordion", () => {
    render(<App />);
    const linkElement = screen.getByLabelText(/<Accordion>/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders Save Button", () => {
    render(<App />);
    const linkElement = screen.getByText(/<button className = "edit-semester" type = "button" onClick= {() => save()}>/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders Add Semester Button", () => {
    render(<App />);
    const linkElement = screen.getByText(/<button className = "edit-semester" type = "button" onClick= {() => addSemester(plan)}>/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders Clear All Semesters Button", () => {
    render(<App />);
    const linkElement = screen.getByText(/<button className = "edit-semester" type = "button" onClick= {() => clearSemesters(plan)}>/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders Clear Save State Button", () => {
    render(<App />);
    const linkElement = screen.getByText(/<button className = "edit-semester" type = "button" onClick= {() => clearSave()}>/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders Add Class Form", () => {
    render(<App />);
    const linkElement = screen.getByText(/<form onSubmit={handleAddCourseSubmit}>/i);
    expect(linkElement).toBeInTheDocument();
});
