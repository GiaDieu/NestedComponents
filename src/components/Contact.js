import React from 'react';
import faker from 'faker';

const Contact = (props) => {
    const information = props.info.people;
    return (
        <div>
            <div className="ui card" style={{'width':'100%'}}>
                <div className="ui image">
                    <img alt="fakerImage" src={faker.image.avatar()} />
                </div>
                <div className="content">
                    <i className="user icon"></i><span>Ly Gia Dieu</span>
                </div>
                <div className="ui segment">
                    <h3 className="ui header">{props.info.title}</h3>
                    <p><i className="envelope outline icon"></i> {information.Email}</p>
                    <p><i className="mobile alternate icon"></i> {information.Phone}</p>
                    <p><i className="birthday cake icon"></i> {information.Birthday}</p>
                    <p><a href="/"><i className="facebook icon"></i> {information.Facebook}</a></p>
                    <p><i className="map marker icon"></i> {information.Address}</p>
                </div>
            </div>
        </div>        
    );
}

export default Contact;