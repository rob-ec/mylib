import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css"

export default function Menu() {

    const [displayMenu, setDisplayMenu] = useState(false);

    function showMenu() {
        setDisplayMenu(true);
    }

    function hiddeMenu() {
        setDisplayMenu(false);
    }

    return (
        <nav className="menu">
            <div className="menu-icon" onClick={showMenu}><i className="fa-solid fa-bars"></i></div>
            <div className={"menu-modal " + (displayMenu ? "menu-show" : "menu-hidden")}>
                <div className="menu-modal-content">
                    <div className="menu-modal-header">
                        <div className="menu-icon-close" onClick={hiddeMenu}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <ol>
                        <li><Link to="/" onClick={hiddeMenu}>Início</Link></li>
                        <li><Link to="/livros" onClick={hiddeMenu}>Livros</Link></li>
                        <li><Link to="/autores" onClick={hiddeMenu}>Autores</Link></li>
                        <li><Link to="/categorias" onClick={hiddeMenu}>Categorias</Link></li>
                        <li><Link to="/sobre" onClick={hiddeMenu}>Sobre</Link></li>
                    </ol>
                </div>
            </div>
        </nav>
    );
}