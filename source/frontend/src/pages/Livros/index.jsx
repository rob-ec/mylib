import React, { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox";
import axios from 'axios';

import "./styles.css"

import { URL_API } from "../../components/APIConfig";
import ItemLivro from "../../components/ItemLivro";
import Alert from "../../components/Alert";

export default function Livros() {

    const [livros, setLivros] = useState([]);
    const [errorMessage, setErrorMessage] = useState({});

    useEffect(() => {
        axios
            .get(URL_API + '/livros')
            .then((response) => {
                setLivros(response.data);
            })
            .catch(error => setErrorMessage(error));
    }, []);

    function searchByNome(nome) {
        console.log(nome);
        axios
            .get(URL_API + '/buscar/livros/?search=' + nome)
            .then((response) => {
                console.log(response.data)
                setLivros(response.data);
            })
            .catch(error => setErrorMessage(error));
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
                {livros.length <= 0 ? <Alert message="Nenhum livro encontrado"/> : <></>}
                {livros.map((livro, index) => {
                    return (<ItemLivro livro={livro} key={index} />);
                })}
            </section>
        </div>
    );
}