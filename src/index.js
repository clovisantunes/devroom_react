import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Backend from './Pages/products/backend/page'
import Web from './Pages/products/web/page'

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './styles/global.scss';
import App from './App';
import Contact from './Pages/contact/page';

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/Web" element={<Web />} />
        </Routes>
      </Router>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
