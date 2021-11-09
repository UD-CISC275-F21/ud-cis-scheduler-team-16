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
            Features are:
            <ul>
                <li>Students can add or delete a class in a semester</li>
                <li>Students can add or delete a semester of there plan</li>
                <li>Students are able to see an entire course list</li>
                <li>Students can read the description of the course</li>
            </ul>
        </p>
        <button className= "modal-close" onClick={closeModal}></button>
    </div>;
};