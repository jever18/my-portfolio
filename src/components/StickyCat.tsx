import React from 'react';
// Pastikan kamu sudah punya file running-cat.gif di folder assets
import runningCat from '../assets/cats21.gif'; 

function StickyCat() {
  return (
    <img 
      src={runningCat} 
      alt="Kucing Berlari" 
      style={{
        position: 'fixed',
        top: '75px', // Mengatur posisi di bawah navbar (sekitar 75px)
        left: '20px',
        width: '100px',
        zIndex: 1000,
        borderRadius: '50%',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
      }} 
    />
  );
}

export default StickyCat;
