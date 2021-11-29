import React from "react"; 
import "../App.css";
import { Course } from "./course";
import { nanoid } from "nanoid";
const REQUIRED_CLASSES : Course[] = [
/* adding the courses that are required in a Comp Sci BS major, starting with the courses that have to absolutely be taken and then figuring 
out how to implement optional courses that have to be  */
    {   ID: nanoid(), 
        School: "CISC",
        ClassID: 108,
        CourseName: "Introduction to Computer Science I",
        Desc: "Computing and principles of programming with an emphasis on systematic program design. Topics include functional programming, data abstraction, procedural abstraction, use of control and state, recursion, testing, and object-oriented programming concepts. Requires no prior programming experience, open to any major, but intended primarily for majors and minors in computer science or mathematics.",
        Credits: 3
    },
    {
        ID: nanoid(), 
        School: "CISC",
        ClassID: 181,
        CourseName: "Introduction to Computer Science II",
        Desc: "Principles of computer science illustrated and applied through programming in an object oriented language. Programming projects illustrate computational problems, styles and issues that arise in computer systems development and in all application areas of computation.",
        Credits: 3
    },
    {
        ID = nanoid(),
        School: "CISC",
        ClassID: 210,
        CourseName: "Introduction to Systems Programming",
        Desc: "Principles of computer systems programming for software and hardware platforms to achieve efficient resource usage. Topics include the C programming language, memory management, and awareness of system constraints and interfacing. Projects include programming embedded systems and interactive objects.",
        Credits: 3
    },
    {
        ID = nanoid(),
        School: "CISC",
        ClassID: 220,
        CourseName: "Data Structures",
        Desc: "Review of data type abstraction, recursion, arrays, stacks, queues, multiple stacks and linked lists. Emphasis on dynamic storage management, garbage collection, trees, graphs, tables, sorting and searching.",
        Credits: 3
    },
    {
        ID = nanoid(), 
        School: "CISC",
        ClassID: 260,
        CourseName: "Machine Organization and Assembly Language",
        Desc: "Introduction to the basics of machine organization. Programming tools and techniques at the machine and assembly levels. Assembly language programming and computer arithmetic techniques.",
        Credits: 3
    },
    {
        ID = nanoid(), 
        School: "CISC",
        ClassID: 275,
        CourseName: "Introduction to Software Engineering",
        Desc: "Object oriented software design and development through use of an object oriented programming language. Topics include team programming, design patterns, graphical user interfaces, software engineering tools (e.g., integrated development environments, version control, build management, bug tracking, automated testing).",
        Credits: 3
    },
    {
        ID = nanoid(), 
        School: "MATH",
        ClassID: 241,
        CourseName: "Analytic Geometry and Calculus A",
        Desc: "Functions, limits, continuity, derivatives. Polynomial, rational, exponential, hyperbolic, logarithmic, trigonometric and inverse trigonometric functions. Definite and indefinite integrals and the Fundamental Theorem of Calculus. Simple differential equations (separable ODE, linear ODE). ODE models leading to exponential growth and decay.",
        Credits: 4
    },
    {
        ID = nanoid(), 
        School: "CISC",
        ClassID: 303,
        CourseName: "Automata Theory",
        Desc: "Automata and formal language theory. Background for advanced applications in compilers, computer networks, operating systems, and natural language processing. Finite automata and regular languages. Push down automata and context free grammars. Turing machines.",
        Credits: 3
    },
    {
        ID = nanoid(), 
        School: "CISC",
        ClassID: 320,
        CourseName: "Introduction to Algorithms",
        Desc: "Design and analysis of algorithms: worst/average case analysis, proofs for correctness and performance of algorithms. Algorithmic strategies (divide and conquer, greedy methods, dynamic programming, etc.). Algorithms for searching, forming and traversal of strings, trees and graphs. Categorization of computational problems: classes P and NP. NP completeness.",
        Credits: 3
    },
    {
        ID = nanoid(), 
        School: "MATH",
        ClassID: 242,
        CourseName: "Analytic Geometry and Calculus B",
        Desc: "Brief review of MATH 241; evaluation of limits by L’Hospital’s rule; applications of integration; integration techniques; parametric curves; polar coordinates; infinite sequences and series. Includes use of computers to perform symbolic, numerical and graphical analysis.",
        Credits: 4
    }
    {
        ID = nanoid(), 
        School: "MATH",
        ClassID: 210,
        CourseName: "Discrete Mathematics I",
        Desc: "Elements of sets and logic. Relations, functions. Integers. Induction and recursion. Principles and techniques of counting. Graphs. Paths and circuits",
        Credits: 3
    },
    {
        ID = nanoid(), 
        School: "CISC",
        ClassID: 304,
        CourseName: "Logic for Programming",
        Desc: "Propositional and predicate logic for general reasoning and advanced applications in knowledge representation in artificial intelligence and database, program correctness and programming semantics. Models, resolution, logic programming, and natural deduction.",
        Credits: 3
    },
    {
        ID = nanoid(), 
        School: "CISC",
        ClassID: 355,
        CourseName: "Computers, Ethics and Society",
        Desc: "Explains relationships among information technology, society and ethics by examining issues raised by increasingly widespread use of computers. Topics include ethics for computer professionals, computer impact on factory work, office work, personal privacy and social power distribution.",
        Credits: 3
    }
];