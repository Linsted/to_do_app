import getReducers from "../core/reducers";
import { combineReducers, createStore } from "redux";
import { persistStore } from "redux-persist";

export const getStore = () => {
  const store = createStore(combineReducers(getReducers()));

  return store;
};

export default getStore;
export const persistor = persistStore(getStore());
