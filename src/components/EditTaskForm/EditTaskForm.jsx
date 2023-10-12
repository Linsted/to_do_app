import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

import { useEditTaskForm } from "./useEditTaskForm";
import {
  FORM_TYPE,
  PLACEHOLDER,
  INPUT_NAME,
  ERROR_TEXT,
  LABEL,
  BUTTON_TYPES,
} from "../../helpers/constants";
import { BUTTON_TEXT } from "./constants";

export default function EditTaskForm({ id }) {
  const { validated, handleSubmit, currentTask } = useEditTaskForm(id);

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>{LABEL.TITLE}</Form.Label>
        <Form.Control
          type={FORM_TYPE.TEXT}
          placeholder={PLACEHOLDER.TITLE}
          required
          name={INPUT_NAME.TITLE}
          defaultValue={currentTask.title}
        />
        <Form.Control.Feedback type="invalid">
          {ERROR_TEXT}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>{LABEL.TASK}</Form.Label>
        <Form.Control
          type={FORM_TYPE.TEXT}
          placeholder={PLACEHOLDER.TASK}
          name={INPUT_NAME.TEXT}
          defaultValue={currentTask.text}
        />
      </Form.Group>
      <Button type={BUTTON_TYPES.SUBMIT}>{BUTTON_TEXT}</Button>
    </Form>
  );
}

EditTaskForm.propTypes = {
  id: PropTypes.string.isRequired,
};
