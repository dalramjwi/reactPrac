import React from "react";
import ReactDOM from "react-dom/client"; // react-dom/client에서 createRoot를 가져옵니다.

const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
