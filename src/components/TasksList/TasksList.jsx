import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";

import getTasksSelector from "../Tasks/selectors";
import TaskItem from "../TaskItem/TaskItem";
import getStatusFilterSelector from "../StatusFilter/selectors";
import { STATUS_FILTERS } from "../StatusFilter/constants";

export default function TasksList() {
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

  console.log(visibleTasks);

  return (
    <ListGroup as="ul">
      {visibleTasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          text={task.text}
          completed={task.completed}
        />
      ))}
    </ListGroup>
  );
}
