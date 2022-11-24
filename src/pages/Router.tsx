import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import CatalogPage from "./CatalogPage";
import DetailPage from "./DetailPage/DetailPage";
import NotFoundPage from "./NotFoundPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/:category/search/:keyword' element={<CatalogPage />} />
      <Route path='/:category/:id' element={<DetailPage />} />
      <Route path="/category" element={<CatalogPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;