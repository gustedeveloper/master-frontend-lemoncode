import React from "react";

export const MainComponent = () => {
  const [message, setMessage] = React.useState();

  React.useEffect(() => {
    setMessage();
  }, []);

  return (
    <div>
      <h1>Hello world with React!</h1>
    </div>
  );
};
