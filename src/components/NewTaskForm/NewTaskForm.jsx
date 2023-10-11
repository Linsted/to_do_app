import { useState, useId } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

import { addTask } from "../Tasks/actions";
import { setModalWindow } from "../ModalWindow/actions";

export default function NewTaskForm() {
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

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add title..."
          required
          name="title"
        />
        <Form.Control.Feedback type="invalid">
          Please add title.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Task</Form.Label>
        <Form.Control type="text" placeholder="Add task..." name="text" />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="checkbox"
          id="custom-switch"
          label="Check if task is completed."
          name="completed"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}
