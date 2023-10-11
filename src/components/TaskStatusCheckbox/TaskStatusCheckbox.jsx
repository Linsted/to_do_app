import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import PropTypes from "prop-types";

import { toggleTaskStatus } from "../Tasks/actions";

export default function TaskStatusCheckbox({ completed, id }) {
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-sm-between">
      <Form.Check
        type="checkbox"
        onChange={() => dispatch(toggleTaskStatus(id))}
        checked={completed}
      />
      {completed && <Badge bg="success">Completed</Badge>}
    </div>
  );
}

TaskStatusCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
