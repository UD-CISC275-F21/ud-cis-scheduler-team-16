import React from "react"; 
import "../App.css";
import { Course } from "./course";
const REQUIRED_CLASSES : Course[] {
/* adding the courses that are required in a Comp Sci BS major, starting with the courses that have to absolutely be taken and then figuring 
out how to implement optional courses that have to be  */
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
    {
        school: "CISC";
        id: 303;
        name: "Automata Theory";
        desc: "Automata and formal language theory. Background for advanced applications in compilers, computer networks, operating systems, and natural language processing. Finite automata and regular languages. Push down automata and context free grammars. Turing machines.";
        preReq: "A minimum grade of C- in both MATH 210 and CISC 220";
        coReq: "N/A";
        credits: 3
    }
    {
        school: "CISC";
        id: 320;
        name: "Introduction to Algorithms";
        desc: "Design and analysis of algorithms: worst/average case analysis, proofs for correctness and performance of algorithms. Algorithmic strategies (divide and conquer, greedy methods, dynamic programming, etc.). Algorithms for searching, forming and traversal of strings, trees and graphs. Categorization of computational problems: classes P and NP. NP completeness.";
        preReq: " MATH 210 and a minimum grade of C- in CISC 220";
        coReq: "N/A";
        credits: 3
    }
    {
        school: "MATH";
        id: 242;
        name: "Analytic Geometry and Calculus B";
        desc: "Brief review of MATH 241; evaluation of limits by L’Hospital’s rule; applications of integration; integration techniques; parametric curves; polar coordinates; infinite sequences and series. Includes use of computers to perform symbolic, numerical and graphical analysis.";
        preReq: " MATH 241 or MATH 232";
        coReq: "N/A";
        credits: 4
    }
    {
        school: "MATH";
        id: 210;
        name: "Discrete Mathematics I";
        desc: "Elements of sets and logic. Relations, functions. Integers. Induction and recursion. Principles and techniques of counting. Graphs. Paths and circuits";
        preReq: "N/A";
        coReq: "MATH 241, MATH 242, or MATH 232";
        credits: 3
    }
    {
        school: "CISC";
        id: 304;
        name: "Logic for Programming";
        desc: "Propositional and predicate logic for general reasoning and advanced applications in knowledge representation in artificial intelligence and database, program correctness and programming semantics. Models, resolution, logic programming, and natural deduction.";
        preReq: "CISC 220, MATH 210 (with minimum C- grade in both).";
        coReq: "N/A";
        credits: 3
    }
  };