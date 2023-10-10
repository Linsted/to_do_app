import { handleActions } from "redux-actions";
import { setStatusFilter } from "./actions";
import { STATUS_FILTERS } from "./constants";

const initialState = {
  status: STATUS_FILTERS.ALL,
};

const statusFilterReducerMap = {
  [setStatusFilter]: (state, { payload }) => ({ ...state, status: payload }),
};

const statusFilterReducer = handleActions(statusFilterReducerMap, initialState);

export default statusFilterReducer;
