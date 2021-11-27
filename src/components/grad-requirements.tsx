import React from "react"; 
import "../App.css";
import { Course } from "./course";
const REQUIRED_CLASSES : Course[] {
    {
        school: "CISC";
        id: 108;
        name: "Introduction to Computer Science I";
        desc: "Computing and principles of programming with an emphasis on systematic program design. Topics include functional programming, data abstraction, procedural abstraction, use of control and state, recursion, testing, and object-oriented programming concepts. Requires no prior programming experience, open to any major, but intended primarily for majors and minors in computer science or mathematics.";
        preReq: "N/A";
        coReq: "MATH 115, MATH 117, or higher math course or math placement.";
        credits: 3;
    }
    {
        school: "CISC";
        id: 181;
        name: "Introduction to Computer Science II";
        desc: "Principles of computer science illustrated and applied through programming in an object oriented language. Programming projects illustrate computational problems, styles and issues that arise in computer systems development and in all application areas of computation.";
        preReq: "Grade of C- or better in CISC 108 or CISC 106";
        coReq: "MATH 221, MATH 241, or a higher level math course or math placement.";
        credits: 3;
    }
    {
        school: "CISC";
        id: 210;
        name: "Introduction to Systems Programming";
        desc: "Principles of computer systems programming for software and hardware platforms to achieve efficient resource usage. Topics include the C programming language, memory management, and awareness of system constraints and interfacing. Projects include programming embedded systems and interactive objects.";
        preReq: "A grade of C- or better in CISC 106 or CISC 108";
        coReq: "MATH 221 or MATH 241 or a higher level math course or math placement.";
        credits: 3;
    }
    {
        school: "CISC";
        id: 220;
        name: "Data Structures";
        desc: "Review of data type abstraction, recursion, arrays, stacks, queues, multiple stacks and linked lists. Emphasis on dynamic storage management, garbage collection, trees, graphs, tables, sorting and searching.";
        preReq: "A minimum grade of C- in CISC 210";
        coReq: " MATH 210 or MATH 241";
        credits: 3;
    }
    {
        school: "CISC";
        id: 260;
        name: "Machine Organization and Assembly Language";
        desc: "Introduction to the basics of machine organization. Programming tools and techniques at the machine and assembly levels. Assembly language programming and computer arithmetic techniques.";
        preReq: "A minimum grade of C- in CISC 210";
        coReq: "N/A";
        credits: 3;
    }
    {
        school: "CISC";
        id: 275;
        name: "Introduction to Software Engineering";
        desc: "Object oriented software design and development through use of an object oriented programming language. Topics include team programming, design patterns, graphical user interfaces, software engineering tools (e.g., integrated development environments, version control, build management, bug tracking, automated testing).";
        preReq: "Minimum grade of C- in CISC 181 and CISC 220";
        coReq: "N/A";
        credits: 3
    }
    {
        school: "MATH";
        id: 241;
        name: "Analytic Geometry and Calculus A";
        desc: "Functions, limits, continuity, derivatives. Polynomial, rational, exponential, hyperbolic, logarithmic, trigonometric and inverse trigonometric functions. Definite and indefinite integrals and the Fundamental Theorem of Calculus. Simple differential equations (separable ODE, linear ODE). ODE models leading to exponential growth and decay.";
        preReq: "MATH 117 or acceptable score on the Math Placement Exam in accordance with current standards determined by the Department of Mathematical Sciences.";
        coReq: "N/A";
        credits: 4
    }
  }