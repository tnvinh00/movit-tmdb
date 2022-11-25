import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './pages/Router';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import ScrollToTop from 'components/scrollToTop/scrollToTop';
import LoadingBackdrop from 'components/loadingBackdrop/loadingBackdrop';
import { useAppSelector } from 'hooks';

function App() {
  const { isLoading, isLoadingMore } = useAppSelector(state => state.catalog);
  const { isLoading: isLoadingMovie, isLoadingDetail } = useAppSelector(state => state.movies);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LoadingBackdrop loading={
        isLoading || isLoadingMovie || isLoadingDetail || isLoadingMore
      } />
      <Header />
      <div className="min-h-screen bg-slate-50 dark:bg-black">
        <AppRouter />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
