/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import Header from './components/header';
import Main from './components/content/main';
import Footer from './components/footer';

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header />

        <Main />

        <Footer />
      </div>
    </>
  );
};

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
