import React from "react";

import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Livros from "./pages/Livros";

export default function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Livros />}/>
            <Route path="/livros" element={<Livros />}/>
            <Route path="/about" element={<About />}/>
        </Routes>
    );
}