import React, { FC } from "react";
import { CharactersRAMContainer } from "../pods/characters-ram";
import { NavbarContainer } from "../pods/navbar";

export const CharactersRamPage: FC = () => {
  return (
    <>
      <NavbarContainer />
      <CharactersRAMContainer />
    </>
  );
};
