import { createSelector } from "reselect";
import { TASKS_KEY } from "./constants";

const getTasks = (state) => state[TASKS_KEY];

const getTasksSelector = createSelector(getTasks, (tasks) => tasks.tasks);

export default getTasksSelector;
