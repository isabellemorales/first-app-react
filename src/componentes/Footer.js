import '../App.css';
import rodape from '../assets/fundo_rodape.png';
import Rodapelogo from '../assets/rodape.logo.1.jpg';
import Logorodape from '../assets/rodape.logo.1.png';
export function Footer() {
    return (
        <footer>
            {/* <img src= {rodape} alt="imp" className="footer"/> */}
            <p>Encomendas on-line: <a href="https://wa.me/5511948880090">
            <i className="fa fa-whatsapp"></i> </a> (11) 94888-0090 | <a href="http://fa-instagram.com/imp">
            <i className="fa fa-instagram"></i> </a> @imp </p>
        </footer>
    );
}