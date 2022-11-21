import './App.scss';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './pages/Router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
