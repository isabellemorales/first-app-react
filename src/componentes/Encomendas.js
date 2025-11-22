import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'; // Importa Link para rotas SPA
import '../App.css'; // Importa seu CSS principal


// Utilitário para formatar moeda em R$ (pt-BR)
function Encomenda(valor) {
  if (typeof valor !== 'number' || Number.isNaN(valor)) return '—'
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)
}

// Converte string para número (aceita vírgula) ou retorna null se inválido
function toNumberOrNull(v) {
  const n = Number(String(v).replace(',', '.'))
  return Number.isFinite(n) ? n : null
}

// Gera um ID simples (para usar como key no React)
function novaId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

export default function App() {
  // Estado com as encomendas iniciais (iguais às do seu HTML; onde tinha "n", usamos null)
  const [encomendas, setEncomendas] = useState([
    {
      id: novaId(),
      nome: 'Bárbara',
      produto: 'Body (2 peças) - Preto com fivela dourada',
      quantidade: 2,
      valorUnitario: 200
    },
    {
      id: novaId(),
      nome: 'Júlia',
      produto: 'Saia Envelope (3 peças) - Branca',
      quantidade: null, // no HTML estava "n"
      valorUnitario: 150
    },
    {
      id: novaId(),
      nome: 'Isabela',
      produto: 'Brinco dourado madreperóla (1 peça) - Preto com fivela dourada',
      quantidade: 1,
      valorUnitario: null // no HTML estava "n"
    },
    {
      id: novaId(),
      nome: 'Amanda',
      produto: 'Biquínis (5 peças) - Branco com fivela',
      quantidade: 5,
      valorUnitario: 185
    }
  ])

  // IDs que estão em animação de remoção (.fadeOut)
  const [removendo, setRemovendo] = useState(new Set())

  // Estado do campo de busca
  const [busca, setBusca] = useState('')

  // Estado do formulário
  const [form, setForm] = useState({
    nome: '',
    quantidade: '',
    produto: '',
    valorUnitario: ''
  })

  // Filtra encomendas pelo nome (case-insensitive)
  const filtradas = useMemo(() => {
    const q = busca.trim().toLowerCase()
    if (!q) return encomendas
    return encomendas.filter((e) => e.nome.toLowerCase().includes(q))
  }, [busca, encomendas])

  // Cálculo do total por linha (retorna "—" se faltar dado numérico)
  const totalItem = (q, u) => {
    if (typeof q !== 'number' || typeof u !== 'number') return '—'
    return moedaBRL(q * u)
  }

  // Atualiza o formulário a cada digitação
  const handleFormChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  // Adiciona nova encomenda
  const handleAdd = (e) => {
    e.preventDefault()

    if (!form.nome || !form.produto) {
      alert('Preencha ao menos Nome e Produto.')
      return
    }

    const nova = {
      id: novaId(),
      nome: form.nome.trim(),
      produto: form.produto.trim(),
      quantidade: form.quantidade !== '' ? toNumberOrNull(form.quantidade) : null,
      valorUnitario: form.valorUnitario !== '' ? toNumberOrNull(form.valorUnitario) : null
    }

    setEncomendas((prev) => [...prev, nova])
    setForm({ nome: '', quantidade: '', produto: '', valorUnitario: '' })
  }

  // Remove uma encomenda com animação .fadeOut
  const handleDelete = (id) => {
    // Marca como "removendo" para aplicar a classe .fadeOut
    setRemovendo((prev) => new Set(prev).add(id))

    // Após 1s (tempo da transition no CSS), remove do estado
    setTimeout(() => {
      setEncomendas((prev) => prev.filter((e) => e.id !== id))
      setRemovendo((prev) => {
        const novo = new Set(prev)
        novo.delete(id)
        return novo
      })
    }, 1000)
  }

  // Exemplo de busca na API (mock). Troque pelo fetch real quando tiver a URL.
  const buscarDaAPI = async () => {
    try {
      // Exemplo real:
      // const resp = await fetch('https://sua-api.com/encomendas')
      // const dados = await resp.json()
      // setEncomendas((prev) => [...prev, ...dados.map(d => ({ id: novaId(), ...d }))])

      // Mock demonstrativo:
      await new Promise((r) => setTimeout(r, 500))
      setEncomendas((prev) => [
        ...prev,
        {
          id: novaId(),
          nome: 'Cliente API',
          produto: 'Body (1 peça) - Preto',
          quantidade: 1,
          valorUnitario: 210
        }
      ])
      alert('Dados da API adicionados (mock). Substitua pelo fetch real.')
    } catch (err) {
      console.error('Erro ao buscar da API', err)
      alert('Erro ao buscar da API.')
    }
  }

  return (
    <>
      {/* Cabeçalho com logo e menu (classes e estrutura do seu CSS) */}
      <header>
        <div className="divHeader">
          <img src="/img/logo.png.png" title="imp" className="logo" alt="imp" />
          <nav>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="produtos.html">Produtos</a></li>
              <li>Contato</li>
              <li>|</li>
              <li><a href="encomendas.html">Encomendas</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Conteúdo principal com gradiente de fundo (.fundo) */}
      <main className="fundo">
        {/* Título da seção */}
        <ul className="encomendas-titulo">
          <li className="encomendas-item">Encomendas</li>
        </ul>

        {/* Campo de busca por nome (usa .Buscar e #buscar do seu CSS) */}
        <label htmlFor="buscar" className="Buscar">Buscar</label>
        <input
          type="text"
          name="buscar"
          id="buscar"
          placeholder="Digite o nome do cliente"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        {/* Tabela de encomendas com validação visual (info_invalida) e botão Remover (.botao_add) */}
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Total</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody className="tabela-clientes">
            {filtradas.map((c) => {
              const qtdInvalida = typeof c.quantidade !== 'number'
              const valInvalido = typeof c.valorUnitario !== 'number'
              const linhaRemovendo = removendo.has(c.id)

              return (
                <tr key={c.id} className={`cliente ${linhaRemovendo ? 'fadeOut' : ''}`}>
                  <td className="nome">{c.nome}</td>
                  <td className="produto">{c.produto}</td>
                  <td className={`qtde ${qtdInvalida ? 'info_invalida' : ''}`}>
                    {qtdInvalida ? '—' : c.quantidade}
                  </td>
                  <td className={`unitario ${valInvalido ? 'info_invalida' : ''}`}>
                    {valInvalido ? '—' : moedaBRL(c.valorUnitario)}
                  </td>
                  <td className="total">{totalItem(c.quantidade, c.valorUnitario)}</td>
                  <td>
                    <button className="botao_add" onClick={() => handleDelete(c.id)}>
                      Remover
                    </button>
                  </td>
                </tr>
              )
            })}
            {filtradas.length === 0 && (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center' }}>Nenhuma encomenda encontrada.</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Botão para buscar dados de uma API externa (usa .botao_add) */}
        <button id="api-encomenda" className="botao_add" onClick={buscarDaAPI}>
          Buscar da API
        </button>

        {/* Título da seção do formulário */}
        <ul className="encomendas-titulo">
          <li className="encomendas-item">Adicionar Encomendas</li>
        </ul>

        {/* Formulário controlado (usa estrutura e classes do seu CSS) */}
        <form id="form-adicionar" onSubmit={handleAdd}>
          <fieldset>
            <legend>Dados da Encomenda</legend>

            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="input-padrao"
              placeholder="Digite o nome da(o) cliente"
              value={form.nome}
              onChange={handleFormChange}
              required
            />

            <label htmlFor="quantidade">Quantidade</label>
            <input
              type="number"
              id="quantidade"
              name="quantidade"
              className="input-padrao"
              placeholder="Digite a quantidade desejada"
              value={form.quantidade}
              onChange={handleFormChange}
            />

            <label htmlFor="produto">Produto</label>
            <select
              id="produto"
              name="produto"
              className="input-padrao"
              value={form.produto}
              onChange={handleFormChange}
              required
            >
              <option value="">Selecione</option>
              <option>Body</option>
              <option>Brincos</option>
              <option>Chapéus</option>
              <option>Bolsas</option>
              <option>Biquinis</option>
            </select>

            <label htmlFor="valorUnitario">R$ Unitário</label>
            <input
              type="number"
              id="valorUnitario"
              name="valorUnitario"
              className="input-padrao"
              placeholder="Digite o unitário do produto"
              step="0.01"
              value={form.valorUnitario}
              onChange={handleFormChange}
            />

            <button className="botao_add" id="adiciona_encomenda" type="submit">
              Adicionar
            </button>
          </fieldset>
        </form>
      </main>
    </>
  )
}
