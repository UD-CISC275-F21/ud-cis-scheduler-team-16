import React from "react";
import "../App.css";
import "../App.tsx"

export const customModalSemester = {
    content: {
        background: "grey",
        top: "70%",
        left: "70%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

export const AddSemester = ({openModal}: {openModal: VoidFunction}): JSX.Element => {
    return(
        <div>
            <h2 /* add classname here to look nice later*/>Please select how many classes you want to take and input your classes.</h2>
            <p>How many classes are you going to take during this semester? /*Button to determine how many classes */ <br /></p>
            /*Loop to create a number of courses based on button number (course form to fill out) */
            /*When all fields are filled out, add semester button adds a semester 
        </div>
    );
}