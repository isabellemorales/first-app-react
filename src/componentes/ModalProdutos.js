import React, { useState } from "react";
import "../css/estilo_pop.css";



export default function ModalProduto({ aberto, fechar, nome, imagens, descricao }) {

    const [index, setIndex] = useState(0);

    if (!aberto) return null; // Se não estiver aberto, não renderiza nada

    function imagemAnterior() {
        setIndex((index - 1 + imagens.length) % imagens.length);
    }

    function proximaImagem() {
        setIndex((index + 1) % imagens.length);
    }

    return (
        <div className="popup-overlay">

            <div className="pop">

                <button className="fechar-btn" onClick={fechar}>X</button>

                <h1>{nome}</h1>

                <div className="slider">
                    <button className="btn-slide" onClick={imagemAnterior}>&#10094;</button>

                    <img src={imagens[index]} alt={nome} />

                    <button className="btn-slide" onClick={proximaImagem}>&#10095;</button>
                </div>

                <p className="descricao-pop">{descricao}</p>

            </div>

        </div>
    );
}
