import { useSelector } from "react-redux";
import { STATUS_FILTERS } from "../StatusFilter/constants";
import getTasksSelector from "../Tasks/selectors";
import getStatusFilterSelector from "../StatusFilter/selectors";

export default function useTasksList() {
  const tasks = useSelector(getTasksSelector);
  const status = useSelector(getStatusFilterSelector);

  const getVisibleTasks = (tasks, status) => {
    if (status === STATUS_FILTERS.ACTIVE) {
      return tasks.filter((task) => !task.completed);
    }

    if (status === STATUS_FILTERS.COMPLETED) {
      return tasks.filter((task) => task.completed);
    }

    return tasks;
  };

  const visibleTasks = getVisibleTasks(tasks, status);
  return { visibleTasks };
}
