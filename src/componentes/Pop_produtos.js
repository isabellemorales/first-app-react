import { useState } from "react";
import "../css/estilos_pop.css"; // Importa o CSS do pop-up

// Componente Pop-up
export default function Popup({ produto, fechar }) {

    // Estado que controla qual imagem do slider está sendo exibida
    const [index, setIndex] = useState(0);

    // Função para voltar a imagem do slider
    function prev() {
        // Fórmula que permite voltar (última imagem → primeira)
        setIndex((index - 1 + produto.imagens.length) % produto.imagens.length);
    }

    // Função para avançar imagem
    function next() {
        // Avança (primeira → última quando passar do final)
        setIndex((index + 1) % produto.imagens.length);
    }

    return (
        // Fundo escuro atrás do pop-up
        <div className="popup-overlay">

            <div className="pop">
                
                {/* Botão X no canto superior direito */}
                <button className="fechar-x" onClick={fechar}>X</button>

                {/* Nome do produto */}
                <h1>{produto.nome}</h1>

                {/* Slider de imagens */}
                <div className="slider">
                    {/* Botão anterior */}
                    <button className="btn-slider" onClick={prev}>&#10094;</button>

                    {/* Imagem atual do slider */}
                    <img 
                        src={produto.imagens[index]}
                        alt={produto.nome}
                        className="slider-img"
                    />

                    {/* Botão próximo */}
                    <button className="btn-slider" onClick={next}>&#10095;</button>
                </div>

                {/* Descrição do produto */}
                <p>{produto.descricao}</p>

            </div>
        </div>
    );
}
