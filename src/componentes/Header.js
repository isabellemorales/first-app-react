import '../App.css';
import logo from '../assets/logo.png.png';

export function Header() {
    return (
        <header>
            <div class="divHeader">
                {/* Logotipo*/}
                <img src={logo} title="imp" class="logo" />
                    {/* Menu*/}
                    <nav>
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


