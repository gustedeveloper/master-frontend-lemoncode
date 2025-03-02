import React from "react";
import { ListContainer } from "../pods/list";
import { NavbarContainer } from "../pods/navbar";

export const ListPage: React.FC = () => {
  return (
    <>
      <NavbarContainer />
      <ListContainer />
    </>
  );
};
