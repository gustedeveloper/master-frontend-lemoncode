import { CheckoutPage } from "../scenes/checkout";
import { CityCategoryPage } from "../scenes/city-category";
import { HomePage } from "../scenes/home";
import { LandscapeCategoryPage } from "../scenes/landscape-category";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/city-category" element={<CityCategoryPage />} />
          <Route
            path="/landscape-category"
            element={<LandscapeCategoryPage />}
          />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </>
  );
};
