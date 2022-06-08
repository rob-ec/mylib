import React, { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox";
import axios from 'axios';

import "./styles.css"

import { URL_API } from "../../components/APIConfig";
import ItemLivro from "../../components/ItemLivro";

export default function Livros() {

    const [livros, setLivros] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [error, setError] = useState({});

    useEffect(() => {
        axios
            .get(URL_API + '/livros')
            .then((response) => {
                setLivros(response.data);
            })
            .catch(error => setError(error));
    }, []);

    function searchByNome(nome) {
        // console.log("searching");
        // axios
        //     .get(URL_API + '/livros/?nome=' + nome)
        //     .then((response) => {
        //         setLivros(response.data);
        //     })
        //     .catch(error => setError(error));
    }


    return (
        <div className="livros-container">
            <SearchBox 
                className="form-search-input" 
                name="nome" 
                id="nome" 
                onChange={searchByNome}
            />
            <section>
                <h1 className="section-title">Livros</h1>
                {livros.map((livro, index) => {
                    return (<ItemLivro livro={livro} key={index} />);
                })}
            </section>
        </div>
    );
}