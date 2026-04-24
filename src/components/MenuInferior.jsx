import React from 'react';

function MenuInferior({ seccionActiva, cambiarSeccion }) {
  return (
    <nav className="bottom-nav">
      
      <button 
        className={`nav-item ${seccionActiva === 'inicio' ? 'active' : ''}`} 
        onClick={() => cambiarSeccion('inicio')}
      >
        <i className="fa-solid fa-house"></i>
        <span>Inicio</span>
      </button>

      {/* Botones de ejemplo comunes en apps de turismo, puedes ajustar los IDs luego */}
      <button 
        className={`nav-item ${seccionActiva === 'mapa' ? 'active' : ''}`} 
        onClick={() => cambiarSeccion('mapa')}
      >
        <i className="fa-solid fa-map-location-dot"></i>
        <span>Mapa</span>
      </button>

      <button 
        className={`nav-item ${seccionActiva === 'favoritos' ? 'active' : ''}`} 
        onClick={() => cambiarSeccion('favoritos')}
      >
        <i className="fa-solid fa-heart"></i>
        <span>Guardados</span>
      </button>

      <button 
        className={`nav-item ${seccionActiva === 'perfil' ? 'active' : ''}`} 
        onClick={() => cambiarSeccion('perfil')}
      >
        <i className="fa-solid fa-user"></i>
        <span>Perfil</span>
      </button>

    </nav>
  );
}

export default MenuInferior;