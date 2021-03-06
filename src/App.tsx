import React, { useState } from "react";
import  Modal from "react-modal";
import { PlanViewer } from "./components/PlanViewer";
import { load } from "./components/SaveAndLoad";
import { WriteMessage, customModal} from "./components/WelcomeMessage";
import { Course } from "./interfaces/course";
import { Semester } from "./interfaces/semester";
import { DisplayDepartment } from "./components/sidebar";
import { ProSidebar, Menu, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

/* Resources that assisted in the making of this:
1. Basis of the semester table: https://youtu.be/dYjdzpZv5yc
2. NanoID description: https://www.npmjs.com/package/nanoid
3. Modal: https://www.npmjs.com/package/react-modal
*/

const App = () : JSX.Element => {

    //Hooks
    const [plan, setPlan] = useState<Semester[]>(load());
    const [currentSemesterID, setCurrentSemesterID]= useState("");
    const [currentCourseID, setCurrentCourseID] = useState("");
    const [modalOpen, setOpen] = useState(true); // For welcome message
    const [semNum, setSemNum] = useState(2);
    const [editCourseData, setEditCourseData] = useState<Course>
    ({
        ID: "",
        School: "",
        ClassID: 0,
        CourseName: "",
        Desc: "",
        Credits: 0
    });

    //Display 

    return(
        <div className = "App">
            <Modal
                isOpen={modalOpen}
                onRequestClose={() => setOpen(false)}
                contentLabel="Welcome Message"
                style={customModal}
            >
                <WriteMessage closeModal = {() => setOpen(false)} ></WriteMessage>
            </Modal> 
            <div className = "plan-display">
                <PlanViewer
                    plan = {plan}
                    setPlan = {setPlan}
                    currentSemesterID = {currentSemesterID}
                    setCurrentSemesterID = {setCurrentSemesterID}
                    currentCourseID = {currentCourseID}
                    setCurrentCourseID = {setCurrentCourseID}
                    editCourseData = {editCourseData}
                    setEditCourseData = {setEditCourseData}
                    semNum ={semNum}
                    setSemNum = {setSemNum}
                />
            </div>
            <div className="col-4">
                <div className="full-column">
                    <ProSidebar className="sidebar">
                        <SidebarHeader className="sidebar-header">
                        COURSE LIST
                        </SidebarHeader>
                        <SidebarContent>
                            <Menu iconShape="square">
                                <DisplayDepartment Department = {"CISC"} plan = {plan} 
                                    setPlan= {setPlan} currentSemesterID= {currentSemesterID} setCurrentCourseID={setCurrentCourseID}/>
                                <DisplayDepartment Department = {"MATH"} plan = {plan} 
                                    setPlan= {setPlan} currentSemesterID= {currentSemesterID} setCurrentCourseID={setCurrentCourseID}/>
                            </Menu>
                        </SidebarContent>
                        <SidebarFooter>
                        </SidebarFooter>
                    </ProSidebar>
                </div>
            </div>
        </div>
    );
};

export default App;