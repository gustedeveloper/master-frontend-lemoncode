import React from "react";

export const MainComponent = () => {
  const [user, setUser] = React.useState("User");
  const [inputValue, setInputValue] = React.useState("");

  const formatValue = (value) => {
    const [firstLetter, ...rest] = value.trim();
    return firstLetter.toUpperCase() + rest.join("").toLowerCase();
  };

  const handleClick = () => {
    if (inputValue.trim() !== "") {
      setUser(formatValue(inputValue));
      setInputValue("");
    }
  };

  return (
    <div>
      <h1>{user}, welcome to this world made by React!</h1>

      <label htmlFor="userInput">Please, enter your name</label>

      <input
        id="userInput"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};
