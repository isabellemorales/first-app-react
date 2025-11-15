import React, { useState } from 'react';
import '../App.css';
import logo from '../assets/logo.png';

export function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const alternarMenu = () => {
        setMenuAberto(!menuAberto);
    }

    return (
        <header>
            <div className="divHeader">
                {/* Logotipo*/}
                <img src={logo} title="imp" className="logo" />

                {/*Botão hamburguer para Mobile*/}
                <button className="menu-toggle" onClick={alternarMenu}>
                    ☰
                </button>

                {/* Menu*/}
                <nav className={menuAberto ? 'menu ativo' : 'menu'}>
                    <ul>
                        {/* Itens Menu */}
                        <li>Home</li>
                        <li><a href="produtos.html">Produtos</a></li>
                        <li><a href="contatos.html">Contato</a></li>
                        <li>|</li>
                        <li><a href="encomendas.html">Encomendas</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}


