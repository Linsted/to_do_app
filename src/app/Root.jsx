import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import PropTypes from "prop-types";

import getStore, { persistor } from "./store";

const store = getStore();

const Root = ({ children }) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
