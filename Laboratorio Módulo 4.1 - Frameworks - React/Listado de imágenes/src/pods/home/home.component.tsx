import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const HomeComponent: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home page</h1>
      <button onClick={() => navigate("/city-category")}>City category</button>
      <button onClick={() => navigate("/landscape-category")}>
        Landscape category
      </button>
    </>
  );
};
