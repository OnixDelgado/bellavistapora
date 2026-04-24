import { useState, useEffect } from 'react';
import Inicio from './components/Inicio';
import MenuInferior from './components/MenuInferior';

function App() {
  // Estados: La memoria interna de la aplicación
  const [appData, setAppData] = useState(null);
  const [seccionActiva, setSeccionActiva] = useState('inicio');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  // Efecto: Se ejecuta una sola vez al abrir la app para cargar los datos
  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const response = await fetch('/data.json'); // Busca en la carpeta public
        if (!response.ok) throw new Error('Error al cargar datos');
        
        const data = await response.json();
        setAppData(data);
        
        // Retraso de 600ms para la sensación premium del loader
        setTimeout(() => {
          setCargando(false);
        }, 600);
        
      } catch (err) {
        console.error("No se pudo cargar data.json:", err);
        setError(true);
        setCargando(false);
      }
    };

    fetchDatos();
  }, []);

  // ¡ESTA ES LA FUNCIÓN QUE SE HABÍA BORRADO!
  // Función para cambiar de pantalla y subir arriba
  const cambiarSeccion = (nuevaSeccion) => {
    setSeccionActiva(nuevaSeccion);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 1. Pantalla de Error
  if (error) {
    return (
      <div className="loading-state" style={{ color: 'var(--color-primario)' }}>
        <i className="fa-solid fa-triangle-exclamation"></i>
        <p>Error cargando datos.</p>
        <button onClick={() => window.location.reload()} className="btn-volver" style={{ color: 'var(--color-primario)', marginTop: '10px' }}>
          <i className="fa-solid fa-rotate-right"></i> Reintentar
        </button>
      </div>
    );
  }

  // 2. Pantalla de Carga (Loader)
  if (cargando || !appData) {
    return (
      <div className="loading-state fade-in">
        <i className="fa-solid fa-circle-notch fa-spin" style={{ color: 'var(--color-primario)' }}></i>
        <p>Preparando viaje...</p>
      </div>
    );
  }

  // Lógica para determinar qué componente mostrar según la seccionActiva
  let vistaActual;
  
  if (seccionActiva === 'inicio') {
    // Aquí ya renderizamos el componente Inicio real
    vistaActual = <Inicio data={appData} cambiarSeccion={cambiarSeccion} />;
    
  } else if (appData.detalles[seccionActiva]) {
    // Si es un detalle (ej: gastronomia)
    vistaActual = <div className="vista-detalle fade-in" style={{padding: '50px', textAlign: 'center'}}><h2>Falta crear el componente VistaDetalle</h2></div>;
    
  } else {
    // Buscamos si es un lugar turístico en el array de visitasPopulares
    const lugar = appData.visitasPopulares.find(v => v.id === seccionActiva);
    if (lugar) {
      vistaActual = <div className="vista-lugar fade-in" style={{padding: '50px', textAlign: 'center'}}><h2>Falta crear el componente VistaLugar</h2></div>;
    }
  }

  // 3. Pantalla Principal Renderizada
  return (
    <>
      {vistaActual}

      {/* Aquí ya está activado el componente del menú */}
      <MenuInferior seccionActiva={seccionActiva} cambiarSeccion={cambiarSeccion} />
    </>
  );
}

export default App;