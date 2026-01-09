import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Tema oscuro (Lazy State)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    if (isDark) document.body.classList.add('dark-mode');
    return isDark;
  });

  // Lógica de Scroll y Progreso
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);

      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (height > 0) {
        const scrolled = (winScroll / height) * 100;
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div 
        className="reading-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <header className={isScrolled ? 'scrolled' : ''}>
        <div className="container">
          <nav>
            <Link to="/" className="logo" onClick={closeMenu}>GEMA</Link>
            
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <NavLink to="/" onClick={closeMenu} end>Inicio</NavLink>
              <NavLink to="/servicios" onClick={closeMenu}>Ecosistema</NavLink>
              <NavLink to="/planes" onClick={closeMenu}>Modelos</NavLink>
              <NavLink to="/blog" onClick={closeMenu}>Insights</NavLink>
              
              <NavLink to="/contacto" onClick={closeMenu}>
                Diagnóstico Inicial
              </NavLink>

              <Link to="/login" className="btn-cta-nav" onClick={closeMenu}>
                <i className="fas fa-user-circle"></i>
                Iniciar Sesión
              </Link>
              
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar tema">
                <i className={`fas ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i>
              </button>
            </div>

            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;