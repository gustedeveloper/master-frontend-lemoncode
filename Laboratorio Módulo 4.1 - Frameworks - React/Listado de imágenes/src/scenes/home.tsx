import { FC } from "react";

import { HomeContainer } from "../pods/home";
import { Header } from "../layout/header.layout";

export const HomePage: FC = () => {
  return (
    <>
      <Header />
      <HomeContainer />
    </>
  );
};
