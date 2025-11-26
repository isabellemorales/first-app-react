import React, { useState } from 'react'; // React e hook useState para estado
import { Link } from 'react-router-dom'; // Importa Link para rotas SPA
import '../App.css'; // Importa seu CSS principal
import logo from '../assets/logo.png'; // Importa logo como módulo para usar no img src

function Header() {
    // Estado que guarda se o menu está aberto ou fechado (false = fechado inicialmente)
    const [menuAberto, setMenuAberto] = useState(false);

    // Função para alternar estado do menu quando clicado no botão hamburguer
    const alternarMenu = () => {
        setMenuAberto(!menuAberto);
    }
    
    // Função para fechar o menu (usada ao clicar em links para mobile fechar menu)
    const fecharMenu = () => {
        setMenuAberto(false);
    }

    return (
        <header>
            <div className="divHeader">
                {/* Logo da empresa */}
                <img src={logo} title="imp" className="logo" alt="Logo IMP" />
          
                {/* Botão hamburguer para alternar o menu de navegação em telas pequenas */}
                <button className="menu-toggle" onClick={alternarMenu}>
                    ☰ {/* símbolo hamburger */}
                </button>

                {/* Menu de navegação principal */}
                <nav className={menuAberto ? 'menu ativo' : 'menu'}>
                    {/* Aplica a classe 'menu ativo' quando o menu está aberto, para mostrar menu via CSS */}
                    <ul>
                        {/* Links usando <Link> do react-router-dom para navegação SPA */}
                        <li><Link to="/" onClick={fecharMenu}>Home</Link></li>
                        <li><Link to="/produtos" onClick={fecharMenu}>Produtos</Link></li>
                        <li><Link to="/contato" onClick={fecharMenu}>Contato</Link></li>
                        <li>|</li> {/* separador visual */}
                        <li><Link to="/encomendas" onClick={fecharMenu}>Encomendas</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
