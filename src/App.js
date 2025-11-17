import './App.css';

import Header from './componentes/Header';
import Banner from './componentes/Banner';
import SobreNos from './componentes/Sobre_nos';
import Contato from './componentes/Contato';
import Produtos from './componentes/Produtos';
import Footer from './componentes/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <SobreNos />
      <Produtos />
      <Contato />
      <Footer />
    </div>
  );
}