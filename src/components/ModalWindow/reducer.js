import { handleActions } from "redux-actions";

import { setModalWindow } from "./actions";

const initialState = {
  isModalOpen: true,
};

const modalWindowReducerMap = {
  [setModalWindow]: (state) => ({ ...state, isModalOpen: !state.isModalOpen }),
};

const modalWindowReducer = handleActions(modalWindowReducerMap, initialState);

export default modalWindowReducer;
