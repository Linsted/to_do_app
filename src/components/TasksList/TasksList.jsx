import ListGroup from "react-bootstrap/ListGroup";

import TaskItem from "../TaskItem/TaskItem";
import useTasksList from "./useTasksList";

export default function TasksList() {
  const { visibleTasks } = useTasksList();

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
