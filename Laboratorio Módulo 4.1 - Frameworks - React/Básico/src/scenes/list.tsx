import React, { FC } from "react";
import { ListContainer } from "../pods/list";
import { NavbarContainer } from "../pods/navbar";

export const ListPage: FC = () => {
  return (
    <>
      <NavbarContainer />
      <ListContainer />
    </>
  );
};
