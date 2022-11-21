import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import CatalogPage from "./CatalogPage";
import DetailPage from "./DetailPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/:category/search/:keyword' element={<CatalogPage />} />
      <Route path='/:category/:id' element={<DetailPage />} />
      <Route path="/category" element={<CatalogPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AppRouter;