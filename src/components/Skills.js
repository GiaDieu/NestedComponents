import React from 'react';

const Skills = (props) => {
    const languages = props.languages.Languages;
    return (
        <div className="ui segment">
            <h3><i className="american sign language interpreting icon"></i> {props.languages.title}</h3>
            <ul style={{listStyleType:"none", 'padding':'0'}}>
                <li><i className="python icon" /> {languages.name1}</li>
                <li><i className="html5 icon" /> {languages.name2}</li>
                <li><i className="js icon"/> {languages.name3}</li>
            </ul>
        </div> 
    );
}

export default Skills;