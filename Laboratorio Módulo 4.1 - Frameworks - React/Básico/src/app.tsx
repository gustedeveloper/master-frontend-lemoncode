import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { OrganizationProvider } from "./organization-context";

import { LoginPage } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./detail";

export const App = () => {
  return (
    <OrganizationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list/:organization?" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </OrganizationProvider>
  );
};
