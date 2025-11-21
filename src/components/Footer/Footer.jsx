import "./Footer.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook size={24} />
        </a>
        <a href="https://wa.me/5491112345678" target="_blank" rel="noreferrer">
          <FaWhatsapp size={24} />
        </a>
      </div>

      <p>© 2025 Marta A. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
