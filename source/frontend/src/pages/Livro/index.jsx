import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Alert from "../../components/Alert";
import { URL_API } from "../../components/APIConfig";

export default function Livro(props) {
    const { id } = useParams();
    const [livro, setLivro] = useState(false);
    const [errorMessage, setErrorMessage] = useState({});


    useEffect(() => {
        axios
            .get(URL_API + '/buscar/livro/?id=' + id)
            .then((response) => {
                setLivro(response.data);
            })
            .catch(error => setErrorMessage(error));
    }, []);


    return (
        <div className="livros-container">
            <section>
                {console.log(livro)}
                { !livro ? <Alert message="Nenhum livro encontrado"/> : <></>}
                {livro.nome}
            </section>
        </div>
    );
}