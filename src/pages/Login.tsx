import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulación lógica de roles
    let role = 'subscriber'; 
    if (email.toLowerCase().includes('admin')) role = 'owner';
    else if (email.toLowerCase().includes('client')) role = 'client';

    localStorage.setItem('userRole', role);
    localStorage.setItem('isAuthenticated', 'true');
    
    navigate('/'); 
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h2>GEMA</h2>
          <p className="login-tagline">ESTRATEGIA • TECNOLOGÍA • MARKETING • ORGANIZACIÓN</p>
        </div>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">EMAIL PROFESIONAL</label>
            <input 
              id="email"
              type="email" 
              placeholder="nombre@empresa.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">CONTRASEÑA</label>
            <input 
              id="password"
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          <button type="submit" className="btn-login-submit">
            Entrar al Sistema
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </form>

        <div className="login-footer-links">
          <div className="apply-section">
            <p>¿Quieres trabajar con nosotros?</p>
            <a href="/contacto" className="apply-link">Aplica al diagnóstico inicial</a>
          </div>
          <div className="secondary-links">
            <a href="#" className="forgot-link">Recuperar acceso</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;