// src/components/Beneficios.jsx
import beneficiosImg from '../assets/beneficios.jpg'; // ajuste o caminho se necessário
import '../css/estilo_beneficio.css';

export default function Beneficios() {
  return (
    <section className="titulo_produtos">
      <h2 className="Benefícios">Produtos</h2>

      <div className="beneficios-wrapper">
        <ul className="Benefíciosprodutos">
          <li>Biquínis e Maiôs</li>
          <li>Saídas de Praia</li>
          <li>Acessórios e Bolsas</li>
          <li>Saias</li>
          <li>Chapéus</li>
        </ul>

        <img
          className="img_benefícios"
          src={beneficiosImg}
          alt="Foto que mostra biquíni, acessório e saia"
        />
      </div>
    </section>
  );
}
