import React from "react";

export default function Thought(props) {

    const content = (
        <div> 
            <p>{props.text}</p>
            <p>{props.date}</p>
        </div>
    );
    return (
        <div>
            {content}
        </div>
    );
}