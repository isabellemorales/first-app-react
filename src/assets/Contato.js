import React, { useState } from 'react'; // React e hook useState para estado
import { Link } from 'react-router-dom'; // Importa Link para rotas SPA
import '../App.css'; // Importa seu CSS principal
import '../css/estilo_contatos.css'

function Contato() {
    // Estado para gerenciar os dados do formulário
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
        contato: '',
        motivo: '',
        novidades: false,
    });

    // Função para atualizar o estado conforme o usuário digita
    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    }

    // Função para processar o envio do formulário
    function handleSubmit(event) {
        event.preventDefault(); // Impede recarregar a página

        // Validação básica
        if (!formData.nome || !formData.email) {
            alert('Nome e e-mail são obrigatórios!');
            return;
        }

        // Simulação de envio (substitua por fetch para uma API real)
        console.log('Dados enviados:', formData);
        alert(`Obrigada pelo contato, ${formData.nome}! Em breve responderemos no e-mail: ${formData.email}.`);

        // Resetar formulário após envio
        setFormData({
            nome: '',
            email: '',
            telefone: '',
            mensagem: '',
            contato: '',
            motivo: '',
            novidades: false,
        });
    }

    return (
        <div>
            {/* Conteúdo do site */}
            <main>
                {/* Título */}
                <ul className="contatos-titulo">
                    <li className="contatos-item">Contatos</li>
                </ul>
                <div id="formRetorno" className="divRetorno">
                    <p id="textoRetorno" className="texto-contatos"></p>
                </div>
                <div id="formulario">
                    <p className="texto-contatos">
                        Será um prazer te atender e oferecer o conforto que você merece. Aqui, cada detalhe é pensado para que você
                        se sinta em casa.
                        <br /><br />
                        Fale com a gente pelo Instagram, WhatsApp ou envie sua dúvida aqui pelo formulário. Vai ser um prazer te
                        atender!
                        <br /><br />
                        Estamos à disposição para te ajudar :)
                    </p>

                    <form id="frmContato" onSubmit={handleSubmit}>
                        {/* Caixa em volta FIELDSET */}
                        <fieldset>
                            <legend>Dados Pessoais</legend>

                            <label htmlFor="nome">Nome Completo</label>
                            <input
                                type="text"
                                id="nomesobrenome"
                                name="nome"
                                className="input-padrao"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="input-padrao"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="seuemail@gmail.com"
                            />

                            <label htmlFor="telefone">Telefone</label>
                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                className="input-padrao"
                                value={formData.telefone}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea
                                id="mensagem"
                                name="mensagem"
                                cols="70"
                                rows="10"
                                className="input-padrao"
                                value={formData.mensagem}
                                onChange={handleChange}
                            ></textarea>

                            <label>
                                Como prefere o nosso contato?
                                <input
                                    type="radio"
                                    name="contato"
                                    value="E-Mail"
                                    checked={formData.contato === 'E-Mail'}
                                    onChange={handleChange}
                                /> E-Mail
                                <input
                                    type="radio"
                                    name="contato"
                                    value="Telefone"
                                    checked={formData.contato === 'Telefone'}
                                    onChange={handleChange}
                                /> Telefone
                                <input
                                    type="radio"
                                    name="contato"
                                    value="WhatsApp"
                                    checked={formData.contato === 'WhatsApp'}
                                    onChange={handleChange}
                                /> WhatsApp
                            </label>

                            <label>Qual o motivo do seu contato?</label>
                            <select name="motivo" value={formData.motivo} onChange={handleChange}>
                                <option value="">Selecione</option>
                                <option value="Dúvida">Dúvida</option>
                                <option value="Sugestão">Sugestão</option>
                                <option value="Reclamação">Reclamação</option>
                            </select>
                        </fieldset>

                        <label className="chk">
                            <input
                                type="checkbox"
                                name="novidades"
                                checked={formData.novidades}
                                onChange={handleChange}
                            />
                            Gostaria de receber nossas novidades e lançamentos de moda praia por E-mail?
                        </label>

                        <input type="submit" value="Enviar" id="enviar" className="enviar" />
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Contato;