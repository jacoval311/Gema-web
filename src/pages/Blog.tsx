import { Link } from 'react-router-dom';

const Blog = () => {
  // Datos de ejemplo
  const posts = [
    {
      id: 1,
      category: "Estrategia",
      title: "Por qué el modelo de agencia tradicional está muriendo",
      excerpt: "Las empresas ya no necesitan 'entregables', necesitan resultados de negocio medibles en el P&L.",
      date: "Oct 12, 2025"
    },
    {
      id: 2,
      category: "Tecnología",
      title: "Automatizando tu fuerza de ventas con n8n y OpenAI",
      excerpt: "Guía técnica sobre cómo implementamos agentes que califican leads 24/7 sin intervención humana.",
      date: "Sep 28, 2025"
    },
    {
      id: 3,
      category: "Growth",
      title: "Estructurando un equipo de ingresos (Revenue Operations)",
      excerpt: "Cómo alinear marketing, ventas y éxito del cliente bajo una sola métrica de norte.",
      date: "Sep 15, 2025"
    }
  ];

  return (
    <main>
      {/* 1. HERO (Usa el degradado estándar) */}
      <section className="hero-page">
        <div className="container">
          <span className="badge">Knowledge Hub</span>
          <h1>Insights & <span className="text-gradient">Tendencias</span></h1>
          <p>Pensamiento estratégico para líderes que buscan escalar.</p>
        </div>
      </section>

      {/* 2. GRILLA DE ARTÍCULOS */}
      {/* Usamos bg-white-section para que el fondo responda al modo oscuro */}
      <section className="bg-white-section">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post) => (
              <article key={post.id} className="article-card">
                
                {/* Categoría (Badge reutilizado) */}
                <div style={{ marginBottom: '1rem' }}>
                  <span className="badge" style={{ marginBottom: 0 }}>
                    {post.category}
                  </span>
                </div>

                {/* Título */}
                <h3>
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>

                {/* Extracto */}
                <p>{post.excerpt}</p>

                {/* Footer de la tarjeta (Fecha y Link) */}
                {/* Usamos estilos inline SOLO para layout (flex), no para colores */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                  <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>{post.date}</span>
                  
                  <Link to={`/blog/${post.id}`} style={{ color: 'var(--teal)', fontWeight: '600', fontSize: '0.9rem' }}>
                    Leer más →
                  </Link>
                </div>

              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;