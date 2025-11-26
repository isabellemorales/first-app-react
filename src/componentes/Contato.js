import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para rotas SPA
import '../css/estilo_contatos.css';

function Contatos() {
    // Estado para exibir o retorno após o envio
    const [retorno, setRetorno] = useState('');

    // Envio do formulário (sem recarregar a página)
    function handleSubmit(e) {
        e.preventDefault();
        setRetorno('✅ Mensagem enviada com sucesso! Entraremos em contato em breve.');
        e.target.reset();
        document.getElementById('formRetorno')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return (
        <main>
            {/* Título (mantém a estrutura ul/li para casar com o CSS) */}
            <ul className="contatos-titulo">
                <li className="contatos-item">Contatos</li>
            </ul>

            {/* Mensagem de retorno (exibida após enviar) */}
            {retorno && (
                <div id="formRetorno" className="divRetorno">
                    <p id="textoRetorno">{retorno}</p>
                </div>
            )}

            {/* Card azul do formulário */}
            <div id="formulario">
                <p className="texto-contatos">
                    Será um prazer te atender e oferecer o conforto que você merece. Aqui, cada detalhe é pensado
                    para que você se sinta em casa.
                    <br /><br />
                    Fale com a gente pelo Instagram, WhatsApp ou envie sua dúvida aqui pelo formulário. Vai ser um prazer te atender!
                    <br /><br />
                    Estamos à disposição para te ajudar :)
                </p>

                {/* Form principal (ids/classes iguais ao HTML) */}
                <form id="frmContato" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend> Dados Pessoais </legend>

                        <label htmlFor="nomesobrenome">Nome Completo</label>
                        <input type="text" id="nomesobrenome" name="nome" className="input-padrao" required />

                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="input-padrao"
                            required
                            placeholder="seuemail@gmail.com"
                        />

                        <label htmlFor="telefone">Telefone</label>
                        <input type="tel" id="telefone" name="telefone" className="input-padrao" required />

                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea id="mensagem" name="mensagem" cols="70" rows="10" className="input-padrao" />

                        {/* Opções de contato lado a lado */}
                        <div className="linha-contato">
                            <span className="pergunta">Como prefere o nosso contato?</span>

                            <div>
                                <label className="radio-item">
                                    <input type="radio" name="contato" value="email" /> E-Mail
                                </label>

                                <label className="radio-item">
                                    <input type="radio" name="contato" value="telefone" /> Telefone
                                </label>

                                <label className="radio-item">
                                    <input type="radio" name="contato" value="whatsapp" /> WhatsApp
                                </label>
                            </div>
                        </div>

                        <label htmlFor="motivo"> Qual o motivo do seu contato?</label>
                        <select id="motivo" className="input-padrao select-motivo" defaultValue="">
                            <option value="">Selecione</option>
                            <option>Dúvida</option>
                            <option>Sugestão</option>
                            <option>Reclamação</option>
                        </select>
                    </fieldset>

                    {/* Checkbox na mesma linha do texto */}
                    <label className="chk">
                        <input type="checkbox" name="novidades" />
                        <span>Gostaria de receber nossas novidades e lançamentos de moda praia por E-mail?</span>
                    </label>

                    <input type="submit" value="Enviar" id="enviar" className="enviar" />
                </form>
            </div>
        </main>
    );
}

export default Contatos;
