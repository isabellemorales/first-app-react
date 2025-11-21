// src/components/Beneficios.js
import React, { useState } from 'react';
import "../css/estilo_beneficio.css";

function Beneficios() {
  const [imageOpacity, setImageOpacity] = useState(1);

  const produtos = [
    'Biquínis e Maiôs',
    'Saídas de Praia',
    'Acessórios e Bolsas',
    'Saias',
    'Chápeus'
  ];

  return (
    <section className="titulo_produtos">
      <h2 className="Benefícios">Produtos</h2>
      
      <div className="container-beneficios">
        <ul className="Beneficiosprodutos">
          {produtos.map((produto, index) => (
            <li key={index}>{produto}</li>
          ))}
        </ul>

        <img
          className="img_benefícios"
          src="img/benefícios.jpg"
          alt="Foto que mostra biquini, acessório, saia"
          style={{ opacity: imageOpacity }}
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        />
      </div>
    </section>
  );
}

export default Beneficios;
