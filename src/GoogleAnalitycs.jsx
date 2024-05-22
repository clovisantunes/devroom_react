/* global dataLayer */
import React, { useEffect } from 'react';

function GoogleTagManager() {
  useEffect(() => {
    // Função para inicializar o gtag.js
    function initializeGoogleTagManager() {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-0Y7MJT6ENH');
    }

    initializeGoogleTagManager();
  }, []); 

  return null; 
}

export default GoogleTagManager;
