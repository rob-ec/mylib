import React from "react";

import "./styles.css"

export default function InputText(props) {
    return (
        <input
            className="input-text" 
            type="text" 
            onChange={event => props.onChange(event.target.value)}
            {...props} 
        />);
}