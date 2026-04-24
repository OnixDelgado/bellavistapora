import React from 'react';

function Inicio({ data, cambiarSeccion }) {
  return (
    <div className="vista-inicio fade-in">
      
      {/* Cabecera y Tarjeta de Puntos */}
      <div className="cabecera-principal">
        <div className="saludo-usuario">
          <i className="fa-solid fa-circle-user icono-perfil"></i>
          <div className="texto-saludo">
            <p>Bienvenido de nuevo,</p>
            <h2>{data.usuario.nombre}!</h2>
          </div>
        </div>
        
        <div className="tarjeta-puntos">
          <div className="puntos-bloque">
            <p>Bella Puntos</p>
            {/* toLocaleString() le pone los puntos a los miles automáticamente */}
            <h3 className="puntos-grandes">{data.usuario.puntosActuales.toLocaleString()}</h3>
          </div>
          <div className="puntos-bloque puntos-maximos">
            <p>Máximo</p>
            <h3 className="puntos-chicos">{data.usuario.puntosMaximos.toLocaleString()}</h3>
          </div>
        </div>
      </div>

      <div className="contenido-principal">
        
        {/* Grilla de Categorías Dinámica */}
        <div className="grid-categorias">
          {data.categorias.map((cat) => (
            <div 
              key={cat.id} 
              className={`categoria-item ${cat.destacado ? 'destacado' : ''}`} 
              onClick={() => cambiarSeccion(cat.id)}
            >
              <div className="icono-cat"><i className={cat.icono}></i></div>
              <span>{cat.nombre}</span>
            </div>
          ))}
        </div>

        {/* Sección de Visitas Populares */}
        <section className="visitas-populares">
          <h3 className="titulo-seccion">Visitas Populares</h3>
          <div className="lista-visitas">
            {data.visitasPopulares.map((visita) => (
              <div 
                key={visita.id} 
                className="visita-card" 
                style={{ 
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url('${visita.imagen}')`,
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }} 
                onClick={() => cambiarSeccion(visita.id)}
              >
                <div className="visita-info">
                  {/* Reemplazamos el salto de línea por un espacio para evitar errores de renderizado */}
                  <span>{visita.nombre.replace('\\n', ' ')}</span>
                  <p className="visita-breve">{visita.descripcionBreve}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default Inicio;