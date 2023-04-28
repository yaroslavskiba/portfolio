/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './components/header';
import Main from './components/content/main';
import Footer from './components/footer';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
