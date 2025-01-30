import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Web from './Pages/products/web/page'
import Send from '../src/Pages/Send/index';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './styles/global.scss';
import App from './App';
import Contact from './Pages/contact/page';
import Details from './Pages/details/index';
import DetailService from './Pages/detailsService/index';
import HomeEcommerce from  './Pages/ecommerce/pages/index';
import UserAccount from './Pages/ecommerce/pages/userAccount/index';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Web />} />
          <Route path='send' element={<Send />} />
          <Route path='details' element={<Details />} />
          <Route path='detailService' element={<DetailService />} />
          <Route path='shop' element={<HomeEcommerce />} />
          <Route path='my-account' element={<UserAccount />} />
        </Routes>
      </Router>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
