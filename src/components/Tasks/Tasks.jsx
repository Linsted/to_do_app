import { useSelector } from "react-redux";
import getTasksSelector from "./selectors";

export default function Tasks() {
  const tasks = useSelector(getTasksSelector);
  console.log(tasks)
  return <div>TASKS</div>;
}
