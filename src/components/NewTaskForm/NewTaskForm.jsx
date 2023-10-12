import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import useNewTaskForm from "./useNewTaskForm";
import {
  BUTTON_TYPES,
  FORM_TYPE,
  PLACEHOLDER,
  INPUT_NAME,
  LABEL,
  ERROR_TEXT,
} from "../../helpers/constants";
import { BUTTON_TEXT_NEW, CHECK_LABEL, FEEDBACK_TYPE } from "./constants";

export default function NewTaskForm() {
  const { validated, handleSubmit } = useNewTaskForm();

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>{LABEL.TITLE}</Form.Label>
        <Form.Control
          type={FORM_TYPE.TEXT}
          placeholder={PLACEHOLDER.TITLE}
          required
          name={INPUT_NAME.TITLE}
        />
        <Form.Control.Feedback type={FEEDBACK_TYPE}>
          {ERROR_TEXT}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>{LABEL.TASK}</Form.Label>
        <Form.Control
          type={FORM_TYPE.TEXT}
          placeholder={PLACEHOLDER.TASK}
          name={INPUT_NAME.TEXT}
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type={FORM_TYPE.CHECKBOX}
          label={CHECK_LABEL}
          name={INPUT_NAME.COMPLETED}
        />
      </Form.Group>
      <Button type={BUTTON_TYPES.SUBMIT}>{BUTTON_TEXT_NEW}</Button>
    </Form>
  );
}
