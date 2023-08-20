import React from "react";

export default function Profile(props){
    return(
        <div className="profile">
            <div className="img-container" style={{
                backgroundImage: `url(${props.image})`
            }}></div>
            <div className="contact-name">{props.name}</div>
            <div className="contact-caption">{props.caption}</div>
            <div className="contact-phone">{props.phone}</div>
        </div>
    )
}