import React from "react";

import "./styles.css"

export default function Alert(props) {
    const message = props.message;

    return (
        <div className="alert" {...props}>
            <p>
                <i className="fa-solid fa-triangle-exclamation"></i>
                {message}
            </p>
        </div>
    );
}