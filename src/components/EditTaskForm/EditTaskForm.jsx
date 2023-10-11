import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

import { useEditTaskForm } from "./useEditTaskForm";
import { FORM_TYPE } from "../../helpers/constants";

export default function EditTaskForm({ id }) {
  const { validated, handleSubmit, currentTask } = useEditTaskForm(id);

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type={FORM_TYPE}
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
          type={FORM_TYPE}
          placeholder="Add task..."
          name="text"
          defaultValue={currentTask.text}
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

EditTaskForm.propTypes = {
  id: PropTypes.string.isRequired,
};
