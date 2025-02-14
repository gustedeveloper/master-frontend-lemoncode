import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import { OrganizationProvider } from "./core";

import { LoginPage } from "./login";
import { ListPage } from "./scenes/list";
import { DetailPage } from "./scenes/detail";

export const App = () => {
  return (
    <CssBaseline>
      <OrganizationProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </Routes>
        </Router>
      </OrganizationProvider>
    </CssBaseline>
  );
};
