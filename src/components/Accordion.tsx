import React, {useState, useRef} from "react";
import Icon from "./Icon"

function Accordion({title} : {title: string}){
    const[active, setActive] = useState(true);
    const[height, setHeight] = useState("0px");
    const[rotate, setRotate] = useState("rotating_icon");

    const innerContent = useRef<HTMLFormElement>(null)

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
        <div className="accordionArea">
            <button className={'accordion {setActive}'} onClick={toggleAccordion}>
                <p className="title">{title}</p>
                <Icon className={'{rotate}'} width = {10} fill={"#777"} />
            </button>
            <div
                ref={content}
                style={{maxHeight: '{height}'}}
                className= "accordionContent"
            >
                <div
                    className="accordionText"
                    dangerouslySetInnerHTML={{__html: innerContent}}
                />
            </div>
        </div>
    )
}

export default Accordion;