import { FC } from "react";

import { HomeContainer } from "../pods/home";
import { Header } from "../layout/header";

export const HomePage: FC = () => {
  return (
    <>
      <Header />
      <HomeContainer />
    </>
  );
};
