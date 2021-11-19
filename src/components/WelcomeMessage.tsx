import React from "react";
import "../App.css";

export const customModal = {
    content: {
        background: "white",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

export const WriteMessage = ({closeModal}: {closeModal: VoidFunction}): JSX.Element => {
    return <div className="welcome-message">
        <h2 className= "welcome-message-header">Welcome to the UDEL Plan Creater!</h2>
        <p className = "welcome-message-body">
            This is where you can create your course plan for each semester of college.<br />
            On this site you will be able to visualize your entire college career. <br />
        </p>
        <p>
            Tutorial:
            <ol>
                <li>You start with a plan with just one empty semester.</li>
                <li>You can choose to add semesters, clear all semesters from your plan, save plans, and clear your save state.</li>
                <li>Once expanding a semester, you can add classes manually through the form at the below the accordion.</li>
                <li>Once you have courses, you can edit or delete singular courses, clear all courses from your semester, or delete semesters.</li>
                <li>Remember that everyones academic journey is unique. One size never fits all in college, dont get discouraged! Your plan is your path to your future, no matter how long or short it is.</li>
            </ol>
        </p>
        <button className= "modal-close" onClick={closeModal}></button>
    </div>;
};