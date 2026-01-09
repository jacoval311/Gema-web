import { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  // Lógica para el acordeón de preguntas frecuentes
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main>
      {/* --- HERO DE LA PÁGINA --- */}
      <section className="hero-page">
        <div className="container">
          <h1>El Ecosistema <span className="text-gradient">GEMA</span></h1>
          <p>No vendemos herramientas sueltas. Diseñamos ecosistemas operativos donde la estrategia, la tecnología y las ventas funcionan como un solo motor.</p>
        </div>
      </section>

      {/* --- GRILLA DE SERVICIOS (Fondo Alterno: Beige/Slate) --- */}
      {/* APLICAMOS bg-alt-section para que coincida con el Home */}
      <section className="bg-alt-section">
        <div className="container">
          <div className="grid-3">
            
            {/* Tarjeta 1 */}
            <div className="service-card">
              <div className="icon-box"><i className="fas fa-brain"></i></div>
              <h3>Consultoría Organizacional</h3>
              <p>Antes de automatizar, hay que ordenar. Estructuramos tus procesos, sistemas y recursos para que el crecimiento no rompa la empreza.</p>
              <ul className="check-list" style={{ marginTop: '1.5rem', textAlign: 'left', display: 'inline-block' }}>
                <li><i className="fas fa-check"></i> Estructura organizacional.</li>
                <li><i className="fas fa-check"></i> Estructura de Financiera.</li>
                <li><i className="fas fa-check"></i> Definición de OKRs y KPIs.</li>
              </ul>
            </div>

            {/* Tarjeta 2 (Destacada) */}
            <div className="service-card highlight">
              <div className="icon-box"><i className="fas fa-microchip"></i></div>
              <h3>Tecnología & IA</h3>
              <p>Implementamos agentes autónomos que trabajan 24/7 sin descanso ni errores humanos.</p>
              <ul className="check-list" style={{ marginTop: '1.5rem', textAlign: 'left', display: 'inline-block' }}>
                <li><i className="fas fa-check"></i> Automatización de Flujos (RPA).</li>
                <li><i className="fas fa-check"></i> Agentes IA (Atención, ventas, etc.).</li>
                <li><i className="fas fa-check"></i> Integración de CRMs y ERPs.</li>
              </ul>
            </div>

            {/* Tarjeta 3 */}
            <div className="service-card">
              <div className="icon-box"><i className="fas fa-bullhorn"></i></div>
              <h3>Growth Marketing</h3>
              <p>Sistemas de adquisición de clientes predecibles. Dejas de depender de "referidos" y salimos a cazar oportunidades.</p>
              <ul className="check-list" style={{ marginTop: '1.5rem', textAlign: 'left', display: 'inline-block' }}>
                <li><i className="fas fa-check"></i> Estrategias Comerciales.</li>
                <li><i className="fas fa-check"></i> Embudos de Venta.</li>
                <li><i className="fas fa-check"></i> Posicionamiento de Marca.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECCIÓN DE PREGUNTAS FRECUENTES (Fondo Blanco) --- */}
      {/* APLICAMOS bg-white-section para alternar */}
      <section className="bg-white-section">
        {/* Mantenemos el maxWidth en el container para lectura cómoda */}
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header">
            <h2>Preguntas Frecuentes</h2>
            <p>Dudas comunes sobre nuestra metodología de trabajo.</p>
          </div>

          <div className="faq-container">
            
            {/* Pregunta 1 */}
            <div className={`faq-item ${activeFaq === 0 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(0)}>
                ¿Qué tecnología utilizan para las automatizaciones?
                <i className={`fas ${activeFaq === 0 ? 'fa-minus' : 'fa-plus'}`}></i>
              </div>
              <div className="faq-answer">
                <ul>
                  <li><strong>Orquestación:</strong> Usamos principalmente <strong>n8n</strong> por su flexibilidad y capacidad de integración.</li>
                  <li><strong>Inteligencia Artificial:</strong> Conectamos modelos de OpenAI (GPT-4o), Anthropic (Claude 3.5) y DeepSeek según la necesidad del caso.</li>
                  <li><strong>Infraestructura:</strong> Todo queda alojado en tus propios servidores o nube privada para garantizar la seguridad de tus datos.</li>
                </ul>
              </div>
            </div>

            {/* Pregunta 2 */}
            <div className={`faq-item ${activeFaq === 1 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(1)}>
                ¿La solución tecnológica queda siendo mía?
                <i className={`fas ${activeFaq === 1 ? 'fa-minus' : 'fa-plus'}`}></i>
              </div>
              <div className="faq-answer">
                <p><strong>Absolutamente sí.</strong> A diferencia de otras agencias que "arriendan" la tecnología, nosotros construimos los activos digitales en tu infraestructura. Tú conservas el código, los accesos y el control total una vez finalizado el proyecto.</p>
              </div>
            </div>

            {/* Pregunta 3 */}
            <div className={`faq-item ${activeFaq === 2 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(2)}>
                ¿Cómo funciona el modelo de Equity?
                <i className={`fas ${activeFaq === 2 ? 'fa-minus' : 'fa-plus'}`}></i>
              </div>
              <div className="faq-answer">
                <p>Es un modelo reservado para empresas con alto potencial de escala. En lugar de cobrarte honorarios completos de mercado, reducimos nuestro costo base a cambio de un porcentaje pequeño de participación o una comisión sobre el éxito (Revenue Share). Así, si tú no creces, nosotros no ganamos.</p>
              </div>
            </div>

            {/* Pregunta 4 */}
            <div className={`faq-item ${activeFaq === 3 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(3)}>
                ¿Cuánto tiempo tarda una implementación típica?
                <i className={`fas ${activeFaq === 3 ? 'fa-minus' : 'fa-plus'}`}></i>
              </div>
              <div className="faq-answer">
                <ul>
                  <li><strong>Diagnóstico:</strong> 1 semana.</li>
                  <li><strong>Estructuración (Plan):</strong> 1-2 semanas.</li>
                  <li><strong>Implementación Tecnológica (MVP):</strong> 3-4 semanas.</li>
                  <li><strong>Despliegue Completo:</strong> 2-3 meses dependiendo de la complejidad.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA FINAL (Fondo Gradiente) --- */}
      <section className="cta-section bg-gradient-section">
        <div className="container">
          <h2>¿Dudas sobre cómo encaja esto en tu empresa?</h2>
          <p>¡Hablemos! En 30 minutos te diremos si somos el socio correcto para ti.</p>
          {/* Botón blanco para resaltar sobre el gradiente */}
          <Link to="/contacto" className="btn-primary" style={{ background: 'var(--white)', color: 'var(--teal)', borderColor: 'var(--white)' }}>Agendar llamada exploratoria</Link>
        </div>
      </section>
    </main>
  );
};

export default Services;