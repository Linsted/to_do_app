import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../Tasks/actions";
import { setModalWindow } from "../ModalWindow/actions";
import getTasksSelector from "../Tasks/selectors";

export function useEditTaskForm(id) {
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const tasks = useSelector(getTasksSelector);
  const currentTask = tasks.find((task) => task.id === id);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      return setValidated(true);
    }

    const title = form.elements.title.value;
    const text = form.elements.text.value;

    const updatedTask = { ...currentTask, title, text };

    setValidated(false);
    dispatch(updateTask(updatedTask));
    dispatch(setModalWindow());
  };

  return {
    validated,
    handleSubmit,
    currentTask,
  };
}
