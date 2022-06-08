import React from "react";
import { Link } from "react-router-dom";

import "./styles.css"

import Logo from "../../Logo";
import Menu from "../../Menu";

export default function Header() {
    return (
        <header className="site-header">
            <Link to="/" className="logo"><Logo width="110rem" /></Link>
            <Menu />
        </header>
    )
}