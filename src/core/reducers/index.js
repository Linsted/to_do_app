import { TASKS_KEY } from "../../components/Tasks/constants";
import { tasksReducer } from "../../components/Tasks/reducer";

const reducers = {
  [TASKS_KEY]: tasksReducer,
};

const getReducers = () => ({ ...reducers });

export default getReducers;
