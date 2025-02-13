import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { OrganizationProvider } from "./core";

import { LoginPage } from "./login";
import { DetailPage } from "./detail";
import { ListPage } from "./scenes/list";

export const App = () => {
  return (
    <OrganizationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </OrganizationProvider>
  );
};
