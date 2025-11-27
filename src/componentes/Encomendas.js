import React, { useEffect, useMemo, useState } from "react";
import '../css/estilo_encomenda.css';
import axios from "axios";

export default function Encomendas() {
  // Estado do campo de busca
  const [busca, setBusca] = useState("");
  // Lista de encomendas
  const [encomendas, setEncomendas] = useState([]);
  // Estados de carregamento e erro da API
  const [carregandoAPI, setCarregandoAPI] = useState(false);
  const [erroAPI, setErroAPI] = useState("");

  // Estado do formulário "Adicionar Encomendas"
  const [form, setForm] = useState({
    nome: "",
    quantidade: "",
    produto: "",
    valorUnitario: "",
  });

  // Formatação BRL para exibição dos valores
  const formatBRL = (v) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 2,
    }).format(Number(v || 0));

  // Lista filtrada pelo nome (controlada pelo estado 'busca')
  const encomendasFiltradas = useMemo(() => {
    const q = busca.trim().toLowerCase();
    if (!q) return encomendas;
    return encomendas.filter((e) => e.nome.toLowerCase().includes(q));
  }, [busca, encomendas]);

  // Busca inicial da API ao montar
  useEffect(() => {
    BuscarDadosDaApi();
  }, []);

  // Busca dados na API e controla loading/erro
  function BuscarDadosDaApi() {
    setCarregandoAPI(true);
    setErroAPI("");

    axios.get("http://localhost:3000/encomendas_web")
      .then((response) => {
        setEncomendas(response.data);
      })
      .catch((error) => {
        setErroAPI("Erro ao buscar os dados");
        console.error(error);
      })
      .finally(() => {
        setCarregandoAPI(false);
      });
  }

  // Atualiza campos controlados do formulário
  function handleChangeForm(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // Valida e adiciona nova encomenda localmente
  function handleAdicionar(e) {
    e.preventDefault();

    const quantidadeNum = Number(form.quantidade);
    const unitNum = Number(String(form.valorUnitario).replace(",", ".").trim());

    if (!form.nome.trim()) return alert("Informe o nome.");
    if (!form.produto.trim()) return alert("Selecione o produto.");
    if (!Number.isFinite(quantidadeNum) || quantidadeNum <= 0)
      return alert("Quantidade deve ser um número maior que zero.");
    if (!Number.isFinite(unitNum) || unitNum <= 0)
      return alert("Valor unitário deve ser um número maior que zero.");

    const novo = {
      id: Date.now(),
      nome: form.nome.trim(),
      produto: form.produto.trim(),
      quantidade: quantidadeNum,
      valorUnitario: unitNum,
    };

    setEncomendas((prev) => [novo, ...prev]);
    setForm({
      nome: "",
      quantidade: "",
      produto: "",
      valorUnitario: "",
    });
  }

  // Dblclick: fade + remoção real da linha (do estado)
  useEffect(() => {
    const tabela = document.querySelector("table");
    if (!tabela) return;

    function onDblClick(event) {
      const linha = event.target.closest("tr.cliente");
      if (!linha) return;

      // 1) Aplica o fade
      linha.classList.add("fadeOut");

      // 2) Identifica a linha por id ou por uma chave composta estável
      const id = linha.dataset.id || "";
      const key = linha.dataset.key || "";

      // 3) Remove do estado após o tempo da animação (1s)
      setTimeout(() => {
        setEncomendas((prev) => {
          if (id) {
            return prev.filter((e) => String(e.id) !== String(id));
          }
          if (key) {
            return prev.filter((e) => {
              const k = `${e.nome}|||${e.produto}|||${e.quantidade}|||${e.valorUnitario}`;
              return k !== key;
            });
          }
          // Segurança: se não tiver id nem key, tenta remover pelo primeiro match textual (raro)
          const nomeTxt = linha.querySelector(".nome")?.textContent?.trim() ?? "";
          const prodTxt = linha.querySelector(".produto")?.textContent?.trim() ?? "";
          const qtdeTxt = linha.querySelector(".qtde")?.textContent?.trim() ?? "";
          const unitTxt = linha.querySelector(".unitario")?.textContent?.trim() ?? "";

          // Normaliza unitTxt para número simples (remove R$, milhar, troca vírgula por ponto)
          const unitNum = Number(
            unitTxt.replace(/[^\d,.-]+/g, "").replace(/\./g, "").replace(",", ".")
          );

          let removed = false;
          return prev.filter((e) => {
            if (removed) return true;
            const match =
              e.nome === nomeTxt &&
              e.produto === prodTxt &&
              String(e.quantidade) === qtdeTxt &&
              (Number.isNaN(unitNum) ? true : Number(e.valorUnitario) === unitNum);
            if (match) {
              removed = true;
              return false; // remove este
            }
            return true;
          });
        });
      }, 1000);
    }

    tabela.addEventListener("dblclick", onDblClick);
    return () => tabela.removeEventListener("dblclick", onDblClick);
  }, []);

  return (
    <main style={{ padding: 16 }}>
      {/* Título */}
      <ul className="encomendas-titulo">
        <li className="encomendas-item">Encomendas</li>
      </ul>

      {/* Campo de busca */}
      <input
        type="text"
        name="buscar"
        id="buscar"
        placeholder="Digite o nome do cliente"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        style={{ display: "block", marginBottom: 12 }}
      />

      {/* Tabela */}
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

        <tbody className="tabela-clientes">
          {encomendasFiltradas.length === 0 ? (
            <tr>
              <td colSpan={5} style={{ textAlign: "center", padding: 12 }}>
                Nenhuma encomenda encontrada.
              </td>
            </tr>
          ) : (
            encomendasFiltradas.map((item) => {
              // Cálculo do total
              const total = Number(item.quantidade) * Number(item.valorUnitario);

              // Validação (apenas a LINHA inválida recebe a classe 'info_invalida')
              const quantidadeProduto = Number(item.quantidade);
              const valorProduto = Number(item.valorUnitario);
              const qtdInvalida = !Number.isFinite(quantidadeProduto) || quantidadeProduto < 1;
              const valorInvalido = !Number.isFinite(valorProduto) || valorProduto < 1;
              const linhaInvalida = qtdInvalida || valorInvalido;

              // Chave composta para fallback de remoção (quando não houver id)
              const dataKey = `${item.nome}|||${item.produto}|||${item.quantidade}|||${item.valorUnitario}`;

              return (
                <tr
                  className={`cliente${linhaInvalida ? " info_invalida" : ""}`}
                  key={item.id ?? dataKey}
                  data-id={item.id ?? ""}     // preferencial para remoção
                  data-key={dataKey}          // fallback estável para remoção
                >
                  <td className="nome">{item.nome}</td>
                  <td className="produto">{item.produto}</td>

                  {/* Quantidade: mensagem apenas nesta célula se inválida */}
                  <td className="qtde">
                    {qtdInvalida ? "Quantidade inválida" : item.quantidade}
                  </td>

                  {/* Valor unitário */}
                  <td className="unitario">
                    {valorInvalido ? "Unidade inválida" : formatBRL(item.valorUnitario)}
                  </td>

                  {/* Total formatado */}
                  <td className="total">{formatBRL(total)}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      {/* Botão para buscar da API */}
      <button
        id="api-encomenda"
        className="botao enviar"
        type="button"
        onClick={BuscarDadosDaApi}
        disabled={carregandoAPI}
        style={{ marginTop: 12 }}
      >
        {carregandoAPI ? "Buscando..." : "Buscar da API"}
      </button>

      {/* Exibição de erro da API */}
      {erroAPI && <div style={{ color: "red", marginTop: 8 }}>{erroAPI}</div>}

      {/* Título */}
      <ul className="encomendas-titulo">
        <li className="encomendas-item">Adicionar Encomendas</li>
      </ul>

      {/* Formulário */}
      <form id="form-adicionar" onSubmit={handleAdicionar}>
        <fieldset>
          <legend>Dados da Encomenda</legend>

          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="input-padrao"
            required
            placeholder="Digite o nome da(o) cliente"
            value={form.nome}
            onChange={handleChangeForm}
          />

          <label htmlFor="quantidade">Quantidade</label>
          <input
            type="number"
            id="quantidade"
            name="quantidade"
            className="input-padrao"
            required
            placeholder="Digite a quantidade desejada"
            value={form.quantidade}
            onChange={handleChangeForm}
            min={1}
          />

          <label htmlFor="produto">Produto</label>
          <select
            id="produto"
            name="produto"
            className="input-padrao"
            value={form.produto}
            onChange={handleChangeForm}
            required
          >
            <option value="">Selecione</option>
            <option>Body</option>
            <option>Brincos</option>
            <option>Chapéus</option>
            <option>Bolsas</option>
            <option>Biquínis</option>
          </select>

          <label htmlFor="valorUnitario">R$ Unitário</label>
          <input
            type="number"
            step="0.01"
            id="valorUnitario"
            name="valorUnitario"
            className="input-padrao"
            required
            placeholder="Digite o unitário do produto"
            value={form.valorUnitario}
            onChange={handleChangeForm}
            min={0}
          />

          <button className="enviar" id="adiciona_encomenda" type="submit">
            Adicionar
          </button>
        </fieldset>
      </form>
    </main>
  );
}
