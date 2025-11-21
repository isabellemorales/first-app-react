// --- ÁREA DE IMPORTAÇÕES (Página 35 do PDF) ---
// Importamos o React e o hook useState para gerenciar o estado da aplicação (Página 45).
import React, { useState } from 'react';

// Importamos os arquivos de estilo CSS diretamente no componente.
import './css/estilos_contatos.css';
import './css/estilos_encomendas.css';

// Importamos as imagens como se fossem variáveis para usar no 'src' (Página 40).
// Nota: Assumindo que as imagens estão na pasta 'assets' ou similar.
import logoImg from './img/logo.png.png';
import logoFooter from './img/logo.rodape.png';

// --- DEFINIÇÃO DO COMPONENTE (Página 36 do PDF) ---
// Criamos uma função exportada que representa nossa página/componente.
export default function Encomendas() {

    // (Opcional) Aqui poderíamos usar o useState para tornar a tabela dinâmica (Página 45),
    // substituindo as linhas "hardcoded" (fixas) da tabela por dados reais.
    // const [listaEncomendas, setListaEncomendas] = useState([...]);

    // O 'return' contém o JSX, que é a estrutura visual da página.
    return (
        // React precisa de um elemento pai envolvendo tudo, geralmente uma div ou Fragment (<>).
        // A tag <head> e <body> não são usadas aqui dentro, pois o React é injetado dentro do body.
        <div className="site-container">

            {/* --- HEADER (Página 38/40 - Exemplo de Componente Header) --- */}
            <header>
                {/* Em JSX, usamos 'className' em vez de 'class' para evitar conflito com JS (Página 50) */}
                <div className="divHeader">
                    
                    {/* Tags de imagem precisam ser fechadas com '/>' no final (Página 24) */}
                    {/* Usamos a variável importada 'logoImg' dentro de chaves {} */}
                    <img src={logoImg} title="imp" className="logo" alt="Logo IMP" />

                    <nav> 
                        <ul>
                            {/* Links internos em React geralmente usam <Link>, mas mantive <a> conforme o HTML original */}
                            <li><a href="index.html">Home</a></li>
                            <li><a href="produtos.html">Produtos</a></li>
                            <li>Contato</li>
                            <li>|</li>
                            <li><a href="encomendas.html">Encomendas</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* --- CONTEÚDO PRINCIPAL --- */}
            <main>
                <ul className="encomendas-titulo">
                    <li className="encomendas-item">Encomendas</li>
                </ul>

                {/* Labels usam 'htmlFor' em vez de 'for' no JSX */}
                <label htmlFor="buscar">Buscar</label>
                {/* Input precisa ser fechado com '/>' */}
                <input type="text" name="buscar" id="buscar" placeholder="Digite o nome do cliente"/> 

                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Produto</th>
                            <th>Quantidade</th>
                            <th>Valor Unitário</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    {/* 'className' aplicado novamente no lugar de 'class' */}
                    <tbody className="tabela-clientes">
                        {/* Linha da Tabela 1 */}
                        <tr className="cliente">
                            <td className="nome">Bárbara</td>
                            <td className="peoduto">Body (2 peças) - Preto com fivela dourada </td>
                            <td className="qtde">2</td>
                            <td className="unitario">200</td>
                            <td className="total"></td>
                        </tr>

                        {/* Linha da Tabela 2 */}
                        <tr className="cliente">
                            <td className="nome">Júlia</td>
                            <td className="peoduto"> Saia Envelope (3 peças) - Branca </td>
                            <td className="qtde">n</td>
                            <td className="unitario">150 </td>
                            <td className="total"></td>
                        </tr>

                        {/* Linha da Tabela 3 */}
                        <tr className="cliente">
                            <td className="nome">Isabela</td>
                            <td className="peoduto"> Brinco dourado madreperóla (1 peça) - Preto com fivela dourada </td>
                            <td className="qtde">1</td>
                            <td className="unitario">n{/* Comentários dentro do JSX são assim: chaves e barra-asterisco */}</td>
                            <td className="total"></td>
                        </tr>

                        {/* Linha da Tabela 4 */}
                        <tr className="cliente">
                            <td className="nome">Amanda</td>
                            <td className="peoduto"> Biquínis (5 peças) - Branco com fivela </td>
                            <td className="qtde">5</td>
                            <td className="unitario">185</td>
                            <td className="total"></td>
                        </tr>
                    </tbody>
                </table>
                
                {/* Botão com className. Eventos seriam onClick={funcao} em vez de id para scripts externos */}
                <button id="api-encomenda" className="botao enviar">Buscar da API</button>

                <ul className="encomendas-titulo">
                    <li className="encomendas-item">Adicionar Encomendas</li>
                </ul>
            </main>

            {/* --- FORMULÁRIO --- */}
            <form id="form-adicionar">
                <fieldset>
                    <legend> Dados da Encomenda</legend>

                    <label htmlFor="nome">Nome</label>
                    {/* Input fechado corretamente e 'required' é um booleano, mas pode ficar assim */}
                    <input type="text" id="nome" name="nome" className="input-padrao" required 
                        placeholder="Digite o nome da(o) cliente" />

                    <label htmlFor="quantidade">Quantidade</label>
                    <input type="text" id="quantidade" name="quantidade" className="input-padrao" required 
                        placeholder="Digite a quantidade desejada" />

                    <label htmlFor="produto">Produto</label>
                    <select id="produto" name="produto" className="input-padrao">
                        <option value="">Selecione</option>
                        <option> Body </option>
                        <option> Brincos</option>
                        <option> Chapéus</option>
                        <option> Bolsas</option>
                        <option> Biquinis</option>
                    </select>

                    <label htmlFor="valorUnitario">R$ Unitário</label>
                    <input type="text" id="valorUnitario" name="valorUnitario" className="input-padrao" required 
                        placeholder="Digite o unitário do produto" />

                    {/* No React, o evento de clique seria 'onClick={...}' (Página 48) */}
                    <button className="enviar" id="adiciona_encomenda" type="button">Adicionar</button>
                </fieldset>
            </form>

            {/* --- RODAPÉ --- */}
            <footer>
                <img src={logoFooter} alt="imp" className="logo_footer" />
                <p>
                    Encomendas on-line: 
                    <a href="https://wa.me/5511948880090">
                        {/* 'className' para ícones de fontes externas também deve ser alterado */}
                        <i className="fa fa-whatsapp"></i> 
                    </a> 
                    (11) 94888-0090 |
                    <a href="http://fa-instagram.com/imp">
                        <i className="fa fa-instagram"></i> 
                    </a> 
                    @imp
                </p>
            </footer>

            {/* Scripts: No React, a lógica desses scripts (js/encomendas.js, etc) 
                deve ser reescrita como funções dentro deste componente ou em useEffects. 
                Eles não são carregados via tag <script> no meio do JSX. */}
        </div>
    );
}