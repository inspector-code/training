import React from "react";
import ReactDOM from "react-dom";
import CatNETApp from "./App";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CatNETApp/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
