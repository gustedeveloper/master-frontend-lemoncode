import { CityCategoryPage } from "../scenes/city-category";
import { LandscapeCategoryPage } from "../scenes/landscape-category";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/"></Route>
          <Route path="/city-category" element={<CityCategoryPage />} />
          <Route
            path="/landscape-category"
            element={<LandscapeCategoryPage />}
          />
        </Routes>
      </Router>
    </>
  );
};
