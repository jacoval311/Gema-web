import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <main>
      {/* --- HERO SECTION --- */}
      <section className="hero-page">
        <div className="container">
          <h1>Modelos de Inversión</h1>
          <p>Flexibilidad para crecer. Elige entre consultoría especializada o una alianza estratégica a largo plazo.</p>
        </div>
      </section>

      {/* --- PRICING GRID --- */}
      <section className="container" style={{ padding: '4rem 0 8rem' }}>
        <div className="pricing-grid">
          
          {/* OPCIÓN 1: CONSULTORÍA */}
          <div className="pricing-card">
            <div className="card-icon-wrapper">
              <i className="fas fa-briefcase"></i>
            </div>
            <div className="plan-header">
              <h3>Consultoría</h3>
              <p className="plan-subtitle" style={{ color: 'var(--charcoal)', marginBottom: '1rem' }}>Proyectos Puntuales</p>
              <div className="price-display">
                <span className="currency" style={{ fontSize: '1rem', verticalAlign: 'top' }}>Desde</span>
                <span className="amount"> $1k</span>
                <span className="period">/mes</span>
              </div>
              <p className="plan-description" style={{ marginTop: '1rem' }}>
                Para empresas que necesitan resolver un problema específico con un roadmap claro.
              </p>
            </div>
            <ul className="features-list">
              <li><i className="fas fa-check-circle"></i> Diagnóstico Integral.</li>
              <li><i className="fas fa-check-circle"></i> Implementación Tecnológica.</li>
              <li><i className="fas fa-check-circle"></i> Estrategia de Marca.</li>
              <li><i className="fas fa-check-circle"></i> Pago por proyecto / Fee.</li>
            </ul>
            <div className="card-action">
              <Link to="/contacto" className="btn-secondary full-width">Cotizar Proyecto</Link>
            </div>
          </div>

          {/* OPCIÓN 2: GROWTH PARTNER (DESTACADA) */}
          <div className="pricing-card popular">
            <div className="popular-badge">RECOMENDADO</div>
            <div className="card-icon-wrapper highlight">
              <i className="fas fa-handshake"></i>
            </div>
            <div className="plan-header">
              <h3>Growth Partner</h3>
              <p className="plan-subtitle" style={{ color: 'var(--charcoal)', marginBottom: '1rem' }}>Alianza Estratégica</p>
              <div className="price-display">
                <span className="amount">Equity</span>
                <span className="period"> + Fee Reducido</span>
              </div>
              <p className="plan-description" style={{ marginTop: '1rem' }}>
                Disminuimos tu riesgo, compartimos el éxito. Nos convertimos en socios operativos.
              </p>
            </div>
            <ul className="features-list">
              <li><i className="fas fa-check-circle"></i> <strong>Costo base mínimo.</strong></li>
              <li><i className="fas fa-check-circle"></i> Enfoque 100% Resultados.</li>
              <li><i className="fas fa-check-circle"></i> Participación por hitos.</li>
              <li><i className="fas fa-check-circle"></i> Dirección estratégica.</li>
              <li><i className="fas fa-check-circle"></i> Prioridad en ejecución.</li>
            </ul>
            <div className="card-action">
              <Link to="/contacto" className="btn-primary full-width">Postular mi Empresa</Link>
            </div>
          </div>

          {/* OPCIÓN 3: MENTORÍA */}
          <div className="pricing-card">
            <div className="card-icon-wrapper">
              <i className="fas fa-lightbulb"></i>
            </div>
            <div className="plan-header">
              <h3>Mentoría</h3>
              <p className="plan-subtitle" style={{ color: 'var(--charcoal)', marginBottom: '1rem' }}>Guía Ejecutiva</p>
              <div className="price-display">
                <span className="currency" style={{ fontSize: '1rem', verticalAlign: 'top' }}>Sesiones</span>
                <span className="amount"> 1:1</span>
              </div>
              <p className="plan-description" style={{ marginTop: '1rem' }}>
                Acompañamiento semanal para emprendedores en etapas tempranas de validación.
              </p>
            </div>
            <ul className="features-list">
              <li><i className="fas fa-check-circle"></i> Sesiones periodicas.</li>
              <li><i className="fas fa-check-circle"></i> Acceso a red de contactos.</li>
              <li><i className="fas fa-check-circle"></i> Transferencia de conocimiento.</li>
              <li><i className="fas fa-check-circle"></i> Validación del modelo de negocio.</li>
            </ul>
            <div className="card-action">
              <Link to="/contacto" className="btn-secondary full-width">Agendar Sesión</Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Pricing;