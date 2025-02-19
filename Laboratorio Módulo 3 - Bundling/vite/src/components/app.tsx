import { FC, useEffect } from "react";

export const App: FC = () => {
  useEffect(() => {
    console.log(
      "%cTime to code!",
      "color: #00d1b2; font-size: 16px; font-weight: bold;"
    );
  }, []);

  return (
    <div className="container">
      <h1 className="title">Welcome to Vite Playground! 🚀</h1>
      <p className="description">
        Explore, experiment, and have fun with TypeScript, React and Sass.
      </p>
      <p className="devtools">
        {" "}
        Press F12 to open DevTools and check the console 🛠️
      </p>
    </div>
  );
};
