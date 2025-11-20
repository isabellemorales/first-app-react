import React, { useState } from "react";
import "../css/estilo_modalprodutos.css";

function ModalProdutos({ produto, fechar, favoritar }) {
    // Estado para controlar o índice da imagem no slider
    const [index, setIndex] = useState(0);

    // Estado para controlar se o produto está favoritado (inicialmente falso)
    const [favoritoAtivo, setFavoritoAtivo] = useState(false);

    // Validação: se produto não existe, não renderiza nada
    if (!produto) return null;

    // Função para avançar para a próxima imagem
    function proximaImagem() {
        setIndex((prev) => (prev + 1) % produto.slider.length);
    }

    // Função para voltar para a imagem anterior
    function imagemAnterior() {
        setIndex((prev) => (prev - 1 + produto.slider.length) % produto.slider.length);
    }

    // Função para favoritar/desfavoritar (chama a API via prop favoritar)
    function favoritarItem() {
        // Alterna o estado local
        setFavoritoAtivo(!favoritoAtivo);

        // Chama a função passada via prop (implemente no pai para chamar a API)
        favoritar(produto);
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                {/* Botão Fechar (X) no canto superior direito */}
                <button className="btn-fechar" onClick={fechar}>X</button>

                {/* Título do produto */}
                <h1 className="titulo-modal">{produto.nome}</h1>

                {/* Slider de imagens */}
                <div className="slider-modal">
                    <button className="seta" onClick={imagemAnterior}>❮</button>
                    <img
                        className="imagem-slider"
                        src={produto.slider[index].img}
                        alt={`Imagem ${index + 1} de ${produto.slider.length} para ${produto.nome}`}
                    />
                    <button className="seta" onClick={proximaImagem}>❯</button>
                </div>

                {/* Descrição sincronizada com a imagem */}
                <p className="descricao-modal">
                    {produto.slider[index].desc}
                </p>

                {/* Botão de Favoritos (coração) */}
                <button
                    className={`favorito-btn-modal ${favoritoAtivo ? "favorito-ativo" : ""}`}
                    onClick={favoritarItem}
                >
                    ♥
                </button>
            </div>
        </div>
    );
}

export default ModalProdutos;