import { Link } from 'react-router-dom';
import { type CSSProperties } from 'react';

// Interfaz para variables CSS personalizadas (animación de barras)
interface CustomCSS extends CSSProperties {
  '--h'?: string;
}

const Home = () => {
  return (
    <main>
      {/* 1. HERO SECTION */}
      <section className="hero-home">
        <div className="container">
          <div className="hero-content">
            <span className="badge">Estrategia + Tecnología + Marketing</span>

            <h1>
              Construimos Ecosistemas de{' '}
              <span className="text-gradient">Crecimiento Estructurado</span>
            </h1>

            <p className="hero-subtitle">
              Dejamos atrás la improvisación. Ayudamos a PYMES a escalar mediante la integración de{' '}
              <strong>Administración, Soluciones tecnológicas y Estrategias Comerciales</strong> medibles.
            </p>

            <div className="hero-actions">
              <Link to="/contacto" className="btn-primary">Solicitar Diagnóstico</Link>
              <Link to="/planes" className="btn-secondary">Ver Modelos de Inversión</Link>
            </div>
          </div>

          <div className="hero-visual">
            {/* Visuales flotantes - Usamos clases específicas en lugar de style inline */}
            
            {/* Tarjeta 1: Ventas/Crecimiento */}
            <div className="glass-card glass-card--sales float-animation">
              <div className="stat-row">
                <div className="stat-icon"><i className="fas fa-chart-line"></i></div>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.1rem' }}>+122%</strong>
                  <span style={{ fontSize: '0.8rem' }}>Crecimiento</span>
                </div>
              </div>
            </div>

            {/* Tarjeta 2: IA */}
            <div className="glass-card glass-card--ai float-animation-delay">
              <div className="stat-row">
                <div className="stat-icon"><i className="fas fa-robot"></i></div>
                <div>
                  <strong style={{ display: 'block', fontSize: '1rem' }}>Agentes IA</strong>
                  <span style={{ fontSize: '0.8rem' }}>Autonomía</span>
                </div>
              </div>
            </div>

            {/* Gráfico de Barras */}
            <div className="bars-visual">
              {['20%', '35%', '45%', '55%', '70%', '85%', '100%'].map((h, i) => (
                 <div key={i} className="bar" style={{ '--h': h } as CustomCSS}></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMAS */}
      <section className="problem-section bg-white-section">
        <div className="container">
          <div className="section-header">
            <h2>¿Tu crecimiento está estancado?</h2>
            <p>Identificamos los tres dolores principales que frenan a las empresas medianas hoy en día.</p>
          </div>

          <div className="problem-grid">
            <div className="problem-card">
              <i className="fas fa-fire-alt"></i>
              <h4>Caos Operativo</h4>
              <p>Procesos manuales, datos dispersos y dependencia absoluta de los fundadores para la operación diaria.</p>
            </div>

            <div className="problem-card">
              <i className="fas fa-funnel-dollar"></i>
              <h4>Ventas Impredecibles</h4>
              <p>Dependencia de referidos y "suerte", sin un sistema de adquisición de clientes escalable y medible.</p>
            </div>

            <div className="problem-card">
              <i className="fas fa-blind"></i>
              <h4>Ceguera de Datos</h4>
              <p>Tomar decisiones basadas en intuición u "olfato" en lugar de métricas claras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ECOSISTEMA GEMA */}
      <section id="soluciones" className="solution-section bg-alt-section">
        <div className="container">
          <div className="section-header">
            <span className="badge">Nuestro Enfoque</span>
            <h2>El Ecosistema GEMA</h2>
            <p>No damos soluciones parche. Unimos tres mundos para crear una maquinaria integral.</p>
          </div>

          <div className="grid-3">
            <div className="service-card">
              <div className="icon-box"><i className="fas fa-brain"></i></div>
              <h3>Consultoría Organizacional</h3>
              <p>Diagnóstico estratégico, optimización de procesos y estructuración financiera.</p>
              <ul className="check-list" style={{ marginTop: '1rem', textAlign: 'left', display: 'inline-block' }}>
                <li><i className="fas fa-check"></i> Gobierno Corporativo</li>
                <li><i className="fas fa-check"></i> Estructura de Costos</li>
              </ul>
            </div>

            <div className="service-card highlight">
              <div className="icon-box"><i className="fas fa-microchip"></i></div>
              <h3>Tecnología + IA</h3>
              <p>Implementamos automatizaciones (RPA), agentes IA con memoria y CRMs personalizados.</p>
              <ul className="check-list" style={{ marginTop: '1rem', textAlign: 'left', display: 'inline-block' }}>
                <li><i className="fas fa-check"></i> Automatización de Procesos</li>
                <li><i className="fas fa-check"></i> Agentes Inteligentes</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="icon-box"><i className="fas fa-bullhorn"></i></div>
              <h3>Growth Marketing</h3>
              <p>Estrategias de marca y sistemas de ventas B2B/B2C enfocados en cierre.</p>
              <ul className="check-list" style={{ marginTop: '1rem', textAlign: 'left', display: 'inline-block' }}>
                <li><i className="fas fa-check"></i> Outbound/Inbound</li>
                <li><i className="fas fa-check"></i> Posicionamiento de Marca</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RUTA DE TRANSFORMACIÓN */}
      <section className="methodology-section bg-white-section">
        <div className="container">
          <div className="section-header">
            <h2>Ruta de Transformación</h2>
            <p>Un proceso paso a paso para llevar tu empresa al siguiente nivel.</p>
          </div>

          <div className="steps-grid">
            {[
              { num: '01', title: 'Diagnóstico', desc: 'Evaluamos madurez digital, financiera, organizacional y de marca.' },
              { num: '02', title: 'Planificación', desc: 'Proponemos una plan de implementación detallado alineado con la estrategia.' },
              { num: '03', title: 'Desarrollo', desc: 'Implementamos las soluciones que hacen crecer tu negocio.' },
              { num: '04', title: 'Optimización', desc: 'Ajuste continuo basada en métricas personalizadas.' }
            ].map((step, idx) => (
              <div key={idx} className="step-item">
                <span className="step-number">{step.num}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SOCIOS/FILOSOFÍA */}
      <section className="partner-model-section always-dark">
        <div className="container">
          <div className="partner-grid">
            <div className="partner-text">
              <span className="badge">Nuestra Filosofía</span>
              <h2>Más que consultores, somos <span className="text-gradient">Socios</span>.</h2>
              <p>
                En el modelo tradicional, el consultor cobra gane o pierda el cliente. En GEMA, cambiamos las reglas.
                Alineamos nuestros incentivos con tu éxito.
              </p>

              <div className="model-comparison">
                <div className="model-item">
                  <h4><i className="fas fa-times-circle" style={{ color: '#ef4444' }}></i> Consultoría Tradicional</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)' }}>Altos honorarios fijos, bajo compromiso con el resultado.</p>
                </div>

                <div className="model-item active">
                  <h4><i className="fas fa-check-circle" style={{ color: '#10b981' }}></i> Modelo GEMA</h4>
                  <p style={{ color: 'rgba(255,255,255,0.9)' }}>Costos base reducidos, riesgo compartido y ejecución real.</p>
                </div>
              </div>
              <Link to="/planes" className="btn-primary mt-2">Ver Modelos de Inversión</Link>
            </div>

            <div className="partner-visual">
              <i className="fas fa-handshake"></i>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section className="cta-section bg-gradient-section">
        <div className="container">
          <h2>¿Listo para crecer?</h2>
          <p>Agenda una sesión de diagnóstico gratuita de 30 minutos.</p>
          <Link
            to="/contacto"
            className="btn-primary"
            style={{ background: 'var(--white)', color: 'var(--teal)', borderColor: 'var(--white)' }}
          >
            Agendar Diagnóstico
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
