import React from "react";
import { Provider } from "react-redux";
import getStore from "./store";

const store = getStore();

const Root = ({ children }) => {
  return (
    <React.StrictMode>
      <Provider store={store}>{children}</Provider>
    </React.StrictMode>
  );
};

export default Root;
