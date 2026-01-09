import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '',
    challenge: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate backend submission
    console.log("Datos enviados:", formData);
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  // --- VISTA DE ÉXITO ---
  if (isSubmitted) {
    return (
      <main>
        <section className="container" style={{ padding: '8rem 0', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', maxWidth: '600px', background: 'var(--white)', padding: '3rem', borderRadius: '24px', boxShadow: 'var(--shadow-soft)' }}>
            <div style={{ width: '80px', height: '80px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 2rem auto' }}>
              <i className="fas fa-check"></i>
            </div>
            <h2 style={{ marginBottom: '1rem', color: 'var(--navy)' }}>¡Solicitud Recibida!</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Gracias <strong>{formData.name}</strong>. Hemos recibido la información de <strong>{formData.company || 'tu proyecto '}</strong>.
              <br/><br/>
              Nuestro equipo analizará tu perfil y te contactaremos lo antes posible al correo <strong>{formData.email}</strong>.
            </p>
            <Link to="/" className="btn-primary">Regresar al Inicio</Link>
          </div>
        </section>
      </main>
    );
  }

  // --- VISTA DEL FORMULARIO ---
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-page">
        <div className="container">
          <span className="badge">Hablemos</span>
          <h1>Diagnóstico Inicial</h1>
          <p>Para garantizar resultados, trabajamos solo con empresas que cumplen cierto perfil. Cuéntanos sobre tu proyecto.</p>
        </div>
      </section>

      {/* Contact Section (with background class for proper theming) */}
      <section className="bg-white-section" style={{ padding: '4rem 0 8rem' }}>
        <div className="container">
          <div className="contact-form-container">
            <div className="form-grid">
              
              {/* Columna Izquierda: Información */}
              <div className="info-col">
                <h3>Información de Contacto</h3>
                <p>Si prefieres escribnos directamente antes de llenar el formulario, puedes hacerlo a traves de nuestros medios oficiales:</p>

                <div className="contact-item">
                  <div className="icon-circle">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <strong>Correo</strong>
                    <span>hola@gema.com</span>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-circle">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <strong>Ubicación</strong>
                    <span>Manizales, Colombia</span>
                  </div>
                </div>

                <div className="note-box">
                  <h4><i className="fas fa-lightbulb"></i> Nota Importante</h4>
                  <p>Actualmente solo aceptamos <strong>3 nuevos partners</strong> por trimestre para garantizar la calidad de la ejecución.</p>
                </div>
              </div>

              {/* Columna Derecha: Formulario */}
              <div className="form-content">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Nombre Completo</label>
                    <input type="text" name="name" placeholder="Ej. Juan Pérez" required value={formData.name} onChange={handleChange} />
                  </div>
                  
                  <div className="form-group">
                    <label>Correo Corporativo</label>
                    <input type="email" name="email" placeholder="juan@tuempresa.com" required value={formData.email} onChange={handleChange} />
                  </div>
                  
                  <div className="form-group">
                    <label>Sitio Web</label>
                    <input type="text" name="company" placeholder="www.tuempresa.com" value={formData.company} onChange={handleChange} />
                  </div>
                  
                  <div className="form-group">
                    <label>Facturación Mensual Promedio (USD)</label>
                    <select name="revenue" value={formData.revenue} onChange={handleChange} required>
                      <option value="">Selecciona un rango</option>
                      <option value="<1k">Menos de $1,000 / mes</option>
                      <option value="1k-10k">$1,000 - $10,000 / mes</option>
                      <option value="10k-50k">$10,000 - $50,000 / mes</option>
                      <option value=">50k">Más de $50,000 / mes</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>¿Cuál es tu principal desafío hoy?</label>
                    <textarea name="challenge" rows={4} placeholder="Cuéntanos brevemente qué te impide crecer más rápido..." required value={formData.challenge} onChange={handleChange}></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary full-width" style={{ marginTop: '1rem' }}>Enviar Solicitud</button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;