import React from "react";
import logoImg from "./content/logo_1.png";
import "./mystyles.scss";

export const MainComponent: React.FC = () => {
  const [user, setUser] = React.useState("User");
  const [inputValue, setInputValue] = React.useState("");

  console.log(`Api base: ${process.env.API_BASE}`);

  const formatValue = (value: string) => {
    const [firstLetter, ...rest] = value.trim();
    return firstLetter.toUpperCase() + rest.join("").toLowerCase();
  };

  const handleClick = (): void => {
    if (inputValue.trim() !== "") {
      setUser(formatValue(inputValue));
      setInputValue("");
    }
  };

  return (
    <>
      <h1>
        <span className="yellow">{user}</span>, welcome to this world made by{" "}
        <span className="yellow">React</span>!
      </h1>

      <label className="user-input-label" htmlFor="userInput">
        Please, enter your <span className="yellow">name</span>
      </label>

      <input
        className="user-input"
        id="userInput"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>Send</button>
      <img src={logoImg} />
    </>
  );
};
