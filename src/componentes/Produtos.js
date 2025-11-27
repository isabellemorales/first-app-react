import React, { useState } from "react";
import "../css/estilo_produtos.css"; 
import ModalProdutos from "./ModalProdutos"; 

//  IMPORTAÇÃO DAS IMAGENS 
import prod01 from "../assets/produtos/produto01.png";
import prod01s1 from "../assets/produtos/produto01_slider.jpeg";
import prod01s2 from "../assets/produtos/produto01_slider2.jpeg";

import prod02 from "../assets/produtos/produto02.png";
import prod02s1 from "../assets/produtos/produto02_slider.jpeg";
import prod02s2 from "../assets/produtos/produto02_slider2.jpeg";

import prod03 from "../assets/produtos/produto03.png";
import prod03s1 from "../assets/produtos/produto03_slider.jpeg";
import prod03s2 from "../assets/produtos/produto03_slider2.jpeg";

import prod04 from "../assets/produtos/produto04.png";
import prod04s1 from "../assets/produtos/produto04_slider.jpeg";
import prod04s2 from "../assets/produtos/produto04_slider2.jpeg";

import prod05 from "../assets/produtos/produto05.png";
import prod05s1 from "../assets/produtos/produto05_slider.jpeg";
import prod05s2 from "../assets/produtos/produto05_slider2.jpeg";

import prod06 from "../assets/produtos/produto06.png";
import prod06s1 from "../assets/produtos/produto06_slider.jpg";
import prod06s2 from "../assets/produtos/produto06_slider2.jpg";


export default function Produtos() {

    // Estado que controla se o modal está aberto ou fechado
    const [modalAberto, setModalAberto] = useState(false);

    // Estado que guarda qual produto foi clicado
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);

    // Abre o modal e define qual produto será exibido
    function abrirModal(produto) {
        setProdutoSelecionado(produto); 
        setModalAberto(true);
    }

    // Fecha o modal com animação 
    function fecharModal() {
        setModalAberto(false);
        setTimeout(() => setProdutoSelecionado(null), 300);
    }

    // LISTA DE PRODUTOS — cada um tem título, preço, imagem e slider
    const listaProdutos = [
        {
            id: 1,
            nome: "BODY",
            slider: [
                { img: prod01, desc: "O body ombro a ombro destaca a linha dos ombros e oferece um visual elegante, moderno e feminino." },
                { img: prod01s1, desc: "A fivela dourada central traz um toque de sofisticação e transforma a peça em um look marcante." },
                { img: prod01s2, desc: "Confeccionado em tecido encorpado com leve elasticidade, proporciona conforto sem perder a estrutura." }
            ],
            img: prod01,
            preco: "200"
        },

        {
            id: 2,
            nome: "SAIAS",
            slider: [
                { img: prod02, desc: "A saia envelope branca valoriza a silhueta com seu caimento fluido e modelagem transpassada." },
                { img: prod02s1, desc: "O fechamento lateral em amarração permite regulagem perfeita e adiciona charme ao visual." },
                { img: prod02s2, desc: "Ideal para composições casuais ou sofisticadas, é leve, fresca e extremamente versátil." }
            ],
            img: prod02,
            preco: "100"
        },

        {
            id: 3,
            nome: "BRINCOS ",
            slider: [
                { img: prod03, desc: "O brinco dourado com madrepérola une delicadeza, brilho suave e elegância atemporal." },
                { img: prod03s1, desc: "Seu design orgânico traz leveza e modernidade, perfeito para iluminar qualquer look." },
                { img: prod03s2, desc: "Brincos pendentes com conchas douradas e topo em pérola com design de raio de sol, unindo elegância praiana e sofisticação." }
            ],
            img: prod03,
            preco: "65"
        },

        {
            id: 4,
            nome: "CHAPÉUS DE PALHA",
            slider: [
                { img: prod04, desc: "O chapéu de palha possui aba ampla que oferece proteção com estilo e charme natural." },
                { img: prod04s1, desc: "Feito em palha leve, é confortável e combina com looks de verão ou dias ensolarados." },
                { img: prod04s2, desc: "O laço delicado adiciona um toque feminino, equilibrando simplicidade e sofisticação." }
            ],
            img: prod04,
            preco: "90"
        },

        {
            id: 5,
            nome: "BOLSAS DE PALHA",
            slider: [
                { img: prod05, desc: "A bolsa de palha une naturalidade e elegância em uma peça leve e super versátil." },
                { img: prod05s1, desc: "Com estrutura espaçosa, é perfeita para o dia a dia ou passeios ao ar livre." },
                { img: prod05s2, desc: "O detalhe do tassel e a alça dupla trazem personalidade e charme artesanal ao look." }
            ],
            img: prod05,
            preco: "120"
        },

        {
            id: 6,
            nome: "BIQUÍNIS",
            slider: [
                { img: prod06, desc: "O biquíni possui design moderno com fivela central que realça o busto com elegância." },
                { img: prod06s1, desc: "As alças ajustáveis garantem conforto e sustentação, adaptando-se ao corpo com perfeição." },
                { img: prod06s2, desc: "A combinação entre detalhe do recorte e modelagem equilibrada traz charme e sofisticação." }
            ],
            img: prod06,
            preco: "160"
        }
    ];


    return (
        <main>

            {/* TÍTULO COM O ÍCONE DA CONCHA */}
            <ul className="produtos-titulo">
                <li className="produtos-item">Produtos</li>
            </ul>

            {/* TEXTO DESCRITIVO */}
            <p className="texto-produtos">
                Todos os nossos produtos são feitos sob encomenda, com muito carinho e cuidado!
                <br /><br />
                Fique à vontade para escolher as cores que mais combinam com você.
                As fotos que acompanham cada item mostram criações que já fizemos para te inspirar.
                <br /><br />
                Ficou com alguma dúvida? Estamos aqui para te ajudar no que for preciso! :)
            </p>

            {/* LISTA DE CARDS */}
            <div className="container">
                {listaProdutos.map((prod) => (
                    <div 
                        className="card" 
                        key={prod.id}
                        onClick={() => abrirModal(prod)} // abre modal ao clicar
                    >
                        <img src={prod.img} alt={prod.nome} />
                        <h2>{prod.nome}</h2>
                        <span className="preco">R$ {prod.preco}/cada</span>
                    </div>
                ))}
            </div>

            {/* MODAL (só aparece se modalAberto = true) */}
            {modalAberto && (
                <ModalProdutos 
                    produto={produtoSelecionado} 
                    fechar={fecharModal} 
                />
            )}
        </main>
    );
}
