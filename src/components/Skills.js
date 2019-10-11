import React from 'react';
import { 
    IoLogoPython,
    IoLogoHtml5, 
    IoLogoJavascript } 
from "react-icons/io";

const Skills = (props) => {
    const languages = props.languages.Languages;
    return (
        <div>
            <h3>{props.languages.title}</h3>
            <ul>
                <li><IoLogoPython /> {languages.name1}</li>
                <li><IoLogoHtml5 /> {languages.name2}</li>
                <li><IoLogoJavascript /> {languages.name3}</li>
            </ul>
        </div> 
    );
}

export default Skills;