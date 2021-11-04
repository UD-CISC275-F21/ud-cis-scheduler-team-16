
import React, { useState } from "react";


export const welcomeMessage = () => {
    
    const [modalOpen, setOpen] = React.useState(true);

    const customModal = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };

    const closeModal = () => {
        setOpen(false);
    };

    //unused function
    const openModal = () => {
        setOpen(true);
    };

    const writeMessage = () => {
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

    const message = writeMessage();

//export { modalOpen, setOpen, customModal, closeModal, openModal, message };

}