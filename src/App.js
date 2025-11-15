import logo from './logo.svg';
import './App.css';
import {Header} from './componentes/Header';
import {Banner} from './componentes/Banner';
import {SobreNos} from './componentes/Sobre_nos';
import {Footer} from './componentes/Footer';
import {Contato} from './componentes/Contato';


export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <SobreNos/>;
      <Contato />
      <Footer />
    
    </>
  );
}
