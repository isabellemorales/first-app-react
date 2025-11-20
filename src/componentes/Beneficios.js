import React from "react";
import "../App.css";
import concha from "../assets/conchaicon.png";
import imgBeneficios from "../assets/image.png";

function Beneficios() {
  return (
    <section className="titulo_beneficios">
      <h2 className="Beneficios">Produtos</h2>
      <div className="Beneficios-produtos">
        <ul className="beneficios-lista">
          <li><img src={concha} className="icone-concha" alt="" />Biquínis e Maiôs</li>
          <li><img src={concha} className="icone-concha" alt="" />Saídas de Praia</li>
          <li><img src={concha} className="icone-concha" alt="" />Acessórios e Bolsas</li>
          <li><img src={concha} className="icone-concha" alt="" />Saias</li>
          <li><img src={concha} className="icone-concha" alt="" />Chápeus</li>
        </ul>
        <img src={imgBeneficios} className="img-beneficios" alt="Foto que mostra biquini, acessório, saia" />
      </div>
    </section>
  );
}

export default Beneficios;
