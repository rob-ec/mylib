import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function ItemLivro(props) {

    function dataPublicacaoToDate(dateString) {
        if (dateString) {
            let dateArray = dateString.split("-");

            return new Date(dateArray[0], dateArray[1], dateArray[2])
        } else {
            return new Date();
        }
    }

    const livro = props.livro;
    const livroURL = "/livro/" + livro.id;
    const livroDataPublicacao = dataPublicacaoToDate(livro.data_publicacao);

    return (
        <article className="item-livro" {...props}>
            <Link to={livroURL} className="item-livro-header">
                {livro.livro_virtual ? <div className="item-livro-virtual">eBook</div> : <></>}
                <section className="item-livro-capa"><img src={livro.capa} alt={"Capa do livro " + livro.nome} /></section>
            </Link>
            <h2 className="item-livro-titulo">{livro.nome}</h2>
            <p className="item-livro-data-publicacao">{livroDataPublicacao.toLocaleDateString()}</p>
        </article >
    )
}