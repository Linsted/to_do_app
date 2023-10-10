import getReducers from "../core/reducers";
import { combineReducers, createStore } from "redux";

const initialState = {};

const getStore = () => {
  const store = createStore(combineReducers(getReducers()), initialState);

  return store;
};

export default getStore;
