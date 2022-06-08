import React from "react";

import InputText from "../InputText";

import "./styles.css"

export default function SearchInputText(props) {
    return (
        <div className="search-input-text">
            <InputText {...props} />
            <i className="fa-solid fa-magnifying-glass search-input-icon"></i>
        </div>
    )
}