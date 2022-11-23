import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './pages/Router';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import ScrollToTop from 'components/scrollToTop/scrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <div className="min-h-screen bg-slate-50 dark:bg-gray-900">
        <AppRouter />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
