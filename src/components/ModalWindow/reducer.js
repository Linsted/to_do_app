import { handleActions } from "redux-actions";

import { setModalWindow } from "./actions";

const initialState = {
  isModalOpen: false,
  id: null,
};

const modalWindowReducerMap = {
  [setModalWindow]: (state, { payload = null }) => ({
    ...state,
    isModalOpen: !state.isModalOpen,
    id: payload,
  }),
};

const modalWindowReducer = handleActions(modalWindowReducerMap, initialState);

export default modalWindowReducer;
