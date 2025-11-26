import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './componentes/Header';
import Banner from './componentes/Banner';
import SobreNos from './componentes/Sobre_nos';
import Beneficios from './componentes/Beneficios';
import Contato from './componentes/Contato';
import Produtos from './componentes/Produtos';
import Encomendas from './componentes/Encomendas';
import Footer from './componentes/Footer';

export default function App() {
  return (
    <Router>
      <div className="App">
        {/* Header e Menu ficam em todas as páginas */}
        <Header />

        {/* Conteúdo dinâmico muda conforme a rota */}
        <Routes>
          {/* Página inicial - com Banner */}
          <Route
            path="/"
            element={
              <>
                <Banner />
                <SobreNos />
                <Beneficios />
              </>
            }
          />

          {/* Página de Sobre */}
          <Route path="/sobre" element={<SobreNos />} />

          {/* Página de Produtos */}
          <Route path="/produtos" element={<Produtos />} />

          {/* Página de Contato */}
          <Route path="/contato" element={<Contato />} />

          {/* Página de Encomendas */}
          <Route path="/encomendas" element={<Encomendas />} />
        </Routes>

        {/* Footer fica em todas as páginas */}
        <Footer />
      </div>
    </Router>
  );
}