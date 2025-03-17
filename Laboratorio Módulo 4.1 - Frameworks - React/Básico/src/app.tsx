import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { OrganizationProvider } from "./core";

import { LoginPage } from "./scenes/login";
import { ListPage } from "./scenes/list";
import { DetailPage } from "./scenes/detail";
import { CharactersRamPage } from "./scenes/characters-ram";
import { CharacterRamDetailPage } from "./scenes/character-ram-detail";

export const App = () => {
  return (
    <OrganizationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/characters" element={<CharactersRamPage />} />
          <Route
            path="/character-detail/:id"
            element={<CharacterRamDetailPage />}
          />
        </Routes>
      </Router>
    </OrganizationProvider>
  );
};
