import { useState } from 'react';

const Diagnostic = () => {
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
    // Aquí conectarías con tu backend o servicio de emails (como EmailJS o Formspree)
    alert('Gracias por postular tu empresa. Nuestro equipo analizará tu solicitud.');
    console.log(formData);
  };

  return (
    <main>
      <section className="hero-page" style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <h1>Diagnóstico Inicial</h1>
          <p>Para garantizar resultados, trabajamos solo con empresas que cumplen cierto perfil. Cuéntanos sobre tu proyecto.</p>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '8rem' }}>
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="form-grid">
            
            {/* Columna Izquierda: Información de contacto */}
            <div className="info-col">
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--navy)' }}>Datos de la Empresa</h3>
              
              <div className="form-group">
                <label>Nombre Completo</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Tu nombre" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Correo Corporativo</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="nombre@tuempresa.com" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Sitio Web / LinkedIn</label>
                <input 
                  type="text" 
                  name="company" 
                  placeholder="www.tuempresa.com" 
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Columna Derecha: Perfilamiento */}
            <div className="details-col">
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--navy)' }}>Perfilamiento</h3>

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
                <label>¿Cuál es tu principal cuello de botella hoy?</label>
                <textarea 
                  name="challenge" 
                  rows={4} 
                  placeholder="Ej: Tengo leads pero no cierro ventas, o mis procesos son muy manuales..."
                  required
                  value={formData.challenge}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary full-width" style={{ marginTop: '1rem' }}>
                Enviar Solicitud
              </button>
              <p style={{ fontSize: '0.8rem', color: 'var(--charcoal)', marginTop: '1rem', textAlign: 'center' }}>
                <i className="fas fa-lock"></i> Tus datos son confidenciales.
              </p>
            </div>

          </form>
        </div>
      </section>
    </main>
  );
};

export default Diagnostic;