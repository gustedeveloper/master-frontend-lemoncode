import React from "react";
import { CharactersRAMContainer } from "../pods/characters-ram";
import { NavbarContainer } from "../pods/navbar";

export const CharactersRamPage: React.FC = () => {
  return (
    <>
      <NavbarContainer />
      <CharactersRAMContainer />
    </>
  );
};
