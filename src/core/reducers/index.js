import { MODAL_KEY } from "../../components/ModalWindow/constants";
import modalWindowReducer from "../../components/ModalWindow/reducer";
import { STATUS_FILTER_KEY } from "../../components/StatusFilter/constants";
import statusFilterReducer from "../../components/StatusFilter/reducer";
import { TASKS_KEY } from "../../components/Tasks/constants";
import tasksReducer from "../../components/Tasks/reducer";

const reducers = {
  [TASKS_KEY]: tasksReducer,
  [STATUS_FILTER_KEY]: statusFilterReducer,
  [MODAL_KEY]: modalWindowReducer,
};

const getReducers = () => ({ ...reducers });

export default getReducers;
