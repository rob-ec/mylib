import React from "react";
import SearchInputText from "../SearchInputText";

import "./styles.css"

export default function SearchBox(props) {
    return (
        <form className="search-box" {...props}>
            <SearchInputText
                placeholder="Título do livro"
                onChange={event => props.onChange(event.target.value)}
            />
        </form>
    )
}