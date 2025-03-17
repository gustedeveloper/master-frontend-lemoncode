import React, { FC, FormEvent, useState } from "react";
import { LoginComponent } from "./login.component";
import { useNavigate } from "react-router-dom";

export interface User {
  name: string;
  password: string;
}

export const LoginContainer: FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    name: "rick",
    password: "morty",
  });

  const handleNavigation = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.name === "rick" && user.password === "morty") {
      navigate("/list");
    } else {
      alert("Credentials are incorrect");
    }
  };

  return (
    <LoginComponent
      user={user}
      setUser={setUser}
      handleNavigation={handleNavigation}
    />
  );
};
