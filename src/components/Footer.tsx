import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        
        {/* --- SECCIÓN SUPERIOR (GRILLA) --- */}
        <div className="footer-top">
          
          {/* Columna 1: Marca y Propósito */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">GEMA</Link>
            <p className="footer-desc">
              Growth Partner Estratégico. Diseñamos tecnología que se siente natural y estrategias que escalan resultados reales.
            </p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Columna 2: Navegación Principal */}
          <div className="footer-links-col">
            <h4>Ecosistema</h4>
            <ul>
              <li><Link to="/servicios">Consultoría</Link></li>
              <li><Link to="/servicios">Tecnología & IA</Link></li>
              <li><Link to="/servicios">Growth Marketing</Link></li>
              <li><Link to="/planes">Modelos de Inversión</Link></li>
            </ul>
          </div>

          {/* Columna 3: Compañía */}
          <div className="footer-links-col">
            <h4>Compañía</h4>
            <ul>
              <li><Link to="/blog">Insights (Blog)</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
              <li><Link to="/legal">Política de Privacidad</Link></li>
              <li><Link to="/legal">Términos de Uso</Link></li>
            </ul>
          </div>

          {/* Columna 4: Newsletter Minimalista */}
          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Recibe insights estratégicos quincenales. Sin spam.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="tu@email.com" />
              <button type="submit">Suscribirse</button>
            </form>
          </div>

        </div>

        {/* --- SECCIÓN INFERIOR (COPYRIGHT) --- */}
        <div className="footer-bottom">
          <p>© {currentYear} GEMA Growth Partner. Todos los derechos reservados.</p>
          <p className="made-by">Manizales, Colombia 🇨🇴</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;