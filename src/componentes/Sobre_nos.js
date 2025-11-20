import React, { useState } from 'react';
import '../App.css';
import EstiloDeVida from '../assets/estilodevida.jpg';
import "../css/estilo_sobrenos.css";

function SobreNos() {
    return (
        <section className="container_sobre">
            <img
                className="img_sobrenos"
                src={EstiloDeVida}
                alt="Foto que possui um chapéu de palha, óculos e uma ecobag"
            />

            <div className="sobre">
                <h2 className="titulo_sobrenos">Sobre nós</h2>

                <p className="para_sobre">
                    A <i>Imp</i> nasceu em janeiro de 2025, com um sonho ousado e uma paixão ardente pelo universo da moda praia.
                    Em meio à energia contagiante do verão, percebemos um espaço para <b>criar algo único:</b> peças que celebrassem
                    a beleza individual, a liberdade e a confiança de cada mulher.
                    <br /><br />
                    Somos mais que moda praia, somos um estilo de vida. Na Imp, acreditamos que cada peça é uma celebração da
                    liberdade, da beleza natural e da confiança. Um convite para expressar sua essência e brilhar em cada momento.
                    Por isso, cada coleção é cuidadosamente desenhada para ser atemporal, versátil e para se adaptar à
                    personalidade de quem a usa. Somos um convite para viver com leveza, autenticidade e confiança.
                    <br /><br />
                    Nosso objetivo é que cada mulher que escolha Imp se sinta à vontade para brilhar, sem pressa, sem máscaras.
                    Apenas sendo ela mesma, com toda a confiança e liberdade que a moda pode oferecer.
                </p>

                <p className="texto_diferente"></p>

                <p>
                    Confira a coleção :) <br /><br />
                    {new Date().toLocaleDateString('pt-BR', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })}
                </p>
            </div>
        </section>
    );
}

export default SobreNos;