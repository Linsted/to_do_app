import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import getTasksSelector from "../Tasks/selectors";
import { useDispatch, useSelector } from "react-redux";

import { updateTask } from "../Tasks/actions";
import { setModalWindow } from "../ModalWindow/actions";

export default function EditTaskForm({ id }) {
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const tasks = useSelector(getTasksSelector);
  const currentTask = tasks.find((tasks) => tasks.id === id);

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

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add title..."
          required
          name="title"
          defaultValue={currentTask.title}
        />
        <Form.Control.Feedback type="invalid">
          Please add title.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Task</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add task..."
          name="text"
          defaultValue={currentTask.text}
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}
