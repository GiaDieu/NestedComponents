import React from 'react';
import { IoIosMap, 
    IoLogoWhatsapp,
    IoIosMail,
}
from "react-icons/io";

const Contact = (props) => {
    const information = props.info.people;
    return (
        <div>
            <div className="padding">
                <h3>{props.info.title}</h3>
                <p><IoIosMail /> {information.Email}</p>
                <p><IoLogoWhatsapp /> {information.Phone}</p>
                <p><IoIosMap /> {information.Address}</p>
            </div>   
        </div>
    );
}

export default Contact;