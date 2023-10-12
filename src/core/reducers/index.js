import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { MODAL_KEY } from "../../components/ModalWindow/constants";
import modalWindowReducer from "../../components/ModalWindow/reducer";
import { STATUS_FILTER_KEY } from "../../components/StatusFilter/constants";
import statusFilterReducer from "../../components/StatusFilter/reducer";
import { TASKS_KEY } from "../../components/Tasks/constants";
import tasksReducer from "../../components/Tasks/reducer";

const persistConfig = {
  key: TASKS_KEY,
  storage,
  whitelist: ["tasks"],
};

const persistedReducer = persistReducer(persistConfig, tasksReducer);

const reducers = {
  [TASKS_KEY]: persistedReducer,
  [STATUS_FILTER_KEY]: statusFilterReducer,
  [MODAL_KEY]: modalWindowReducer,
};

const getReducers = () => ({ ...reducers });

export default getReducers;
