import { FC } from "react";

import { NavBarContainer } from "../pods/navbar";
import { HomeContainer } from "../pods/home";

export const HomePage: FC = () => {
  return (
    <>
      <NavBarContainer />
      <HomeContainer />
    </>
  );
};
