import React from "react";
import { DetailContainer } from "../pods/detail";
import { NavbarContainer } from "../pods/navbar";

export const DetailPage: React.FC = () => {
  return (
    <>
      <NavbarContainer />
      <DetailContainer />
    </>
  );
};
