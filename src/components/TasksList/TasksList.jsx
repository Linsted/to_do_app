import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";

import getTasksSelector from "../Tasks/selectors";
import TaskItem from "../TaskItem/TaskItem";

export default function TasksList() {
  const tasks = useSelector(getTasksSelector);
  return (
    <ListGroup as="ul">
      {tasks.map((task) => (
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
