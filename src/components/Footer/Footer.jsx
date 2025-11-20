function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/instagram.svg" alt="Instagram" />
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/facebook.svg" alt="Facebook" />
        </a>

        <a
          href="https://wa.me/5491112345678"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/whatsapp.svg" alt="WhatsApp" />
        </a>
      </div>

      <p className="footer-copy">
        © 2025 Marta A. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
