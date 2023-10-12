import { useState, useId } from "react";
import { useDispatch } from "react-redux";

import { addTask } from "../Tasks/actions";
import { setModalWindow } from "../ModalWindow/actions";

export default function useNewTaskForm() {
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();
  const id = useId();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      return setValidated(true);
    }

    const title = form.elements.title.value;
    const text = form.elements.text.value;
    const isCompleted = form.elements.completed.checked;

    const newTask = {
      id: id,
      title,
      text,
      completed: isCompleted,
    };

    setValidated(false);
    dispatch(addTask(newTask));
    dispatch(setModalWindow());
  };

  return { validated, handleSubmit };
}
