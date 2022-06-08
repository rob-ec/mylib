import React from "react";
import { Routes, Route } from "react-router-dom";
import Livro from "./pages/Livro";
import Livros from "./pages/Livros";
import NoMach from "./pages/NoMach";

export default function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Livros />}/>
            <Route path="/livros" element={<Livros />}/>
            <Route path="/livro/:id" element={<Livro />}/>
            <Route path="/404" element={<NoMach />}/>
            <Route path="*" element={<NoMach />}/>
        </Routes>
    );
}