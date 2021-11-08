import React, {useState, useRef} from "react";
import Icon from "./Icon"

function Accordion({title} : {title: string}){
    const[active, setActive] = useState(true);
    const[height, setHeight] = useState("0px");
    const[rotate, setRotate] = useState("rotating_icon");

    const innerContent = useRef<HTMLDivElement>(null)

    function toggleAccordion(){
        setActive(active === true ? false : true);
        setHeight(
            active === true ? "0px" : '{content.current.scrollHeight}px'
        );
        setRotate(
            active === true ? "rotating_icon" : "rotating_icon"
        );
    }

    return(
        <div className="accordion__section">
            <button className={'accordion {setActive}'} onClick={toggleAccordion}>
                <p className="accordion__title">{title}</p>
                <Icon className={'{rotate}'} height = {50} width = {10} fill={"#777"} />
            </button>
            <div
                ref={innerContent}
                style={{maxHeight: '{height}'}}
                className= "accordion__content"
            >
            </div>
        </div>
    )
}

export default Accordion;