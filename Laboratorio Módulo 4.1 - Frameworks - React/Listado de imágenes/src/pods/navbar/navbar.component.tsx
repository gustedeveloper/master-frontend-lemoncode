import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const NavBarComponent: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Lemon Stock</h1>
      <button onClick={() => navigate("/city-category")}>City category</button>
      <button onClick={() => navigate("/landscape-category")}>
        Landscape category
      </button>
    </>
  );
};
