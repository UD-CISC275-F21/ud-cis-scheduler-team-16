import React from "react";

export const customModal = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

export const WriteMessage = ({closeModal}: {closeModal: VoidFunction}): JSX.Element => {
    return <div>
        <p>
            Welcome to the UDEL course selector and plan creator! <br />
            This is where you can create your course plan for each semester of college.<br />
            Just pick your school from the sidebar and drag your courses into each semster to add them. 
        </p>
        <hr />
        <button className= "modal-close" onClick={closeModal}></button>
    </div>;
};