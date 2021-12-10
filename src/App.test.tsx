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
    const linkElement = screen.getByRole("semester-display");
    expect(linkElement).toBeInTheDocument();
});

test("renders Save Button", () => {
    render(<App />);
    const linkElement = screen.getByRole("save-plan");
    expect(linkElement).toBeInTheDocument();
});

test("renders Add Semester Button", () => {
    render(<App />);
    const linkElement = screen.getByRole("add-semester");
    expect(linkElement).toBeInTheDocument();
});

test("renders Clear All Semesters Button", () => {
    render(<App />);
    const linkElement = screen.getByRole("clear-semesters");
    expect(linkElement).toBeInTheDocument();
});

test("renders Clear Save State Button", () => {
    render(<App />);
    const linkElement = screen.getByRole("clear-plan");
    expect(linkElement).toBeInTheDocument();
});
