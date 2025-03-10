import React, { FC } from "react";
import { DetailContainer } from "../pods/detail";
import { NavbarContainer } from "../pods/navbar";

export const DetailPage: FC = () => {
  return (
    <>
      <NavbarContainer />
      <DetailContainer />
    </>
  );
};
