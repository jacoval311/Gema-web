const Legal = () => {
  return (
    <main>
      <section className="hero-page" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <h1>Política de Privacidad</h1>
          <p>Última actualización: Enero 2026</p>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '8rem', maxWidth: '800px' }}>
        <div style={{ background: 'var(--white)', padding: '2rem', borderRadius: '20px', boxShadow: 'var(--shadow-soft)' }}>
          
          <h3 style={{ color: 'var(--navy)', marginBottom: '1rem' }}>1. Uso de la Información</h3>
          <p style={{ marginBottom: '1.5rem', color: 'var(--charcoal)' }}>
            En GEMA Growth Partner, nos tomamos en serio la confidencialidad de tu modelo de negocio. 
            La información recolectada en nuestros formularios de diagnóstico se utiliza exclusivamente para:
          </p>
          <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginBottom: '2rem', color: 'var(--charcoal)' }}>
            <li>Evaluar la viabilidad de una alianza estratégica.</li>
            <li>Contactarte para agendar sesiones de consultoría.</li>
            <li>Mejorar nuestros algoritmos de calificación de leads.</li>
          </ul>

          <h3 style={{ color: 'var(--navy)', marginBottom: '1rem' }}>2. Protección de Datos</h3>
          <p style={{ marginBottom: '1.5rem', color: 'var(--charcoal)' }}>
            No vendemos, alquilamos ni compartimos tu información con terceros. Todos los datos financieros 
            compartidos durante las sesiones de consultoría están protegidos bajo acuerdos de confidencialidad (NDA) estándar.
          </p>

          <h3 style={{ color: 'var(--navy)', marginBottom: '1rem' }}>3. Contacto</h3>
          <p style={{ color: 'var(--charcoal)' }}>
            Para ejercer tus derechos de acceso, corrección o eliminación de datos, escríbenos a legal@gema.com
          </p>
          
        </div>
      </section>
    </main>
  );
};

export default Legal;