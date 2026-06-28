import React from 'react';

function ComoLlegarBoton() {
  // 1. Define tu destino (puede ser una dirección exacta o coordenadas)
  const destino = encodeURIComponent("8R8Q+G2 Pisco");

  // 2. Construye la URL oficial de Google Maps para navegación/direcciones
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destino}`;

  const abrirNavegacion = () => {
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={abrirNavegacion}
      style={{
        padding: '12px 24px',
        backgroundColor: '#4285F4', // Azul Google
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
      Cómo llegar
    </button>
  );
}

export default ComoLlegarBoton;