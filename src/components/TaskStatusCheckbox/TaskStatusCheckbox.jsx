import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import PropTypes from "prop-types";

import { toggleTaskStatus } from "../Tasks/actions";
import { FORM_TYPE } from "../../helpers/constants";

export default function TaskStatusCheckbox({ completed, id }) {
  const dispatch = useDispatch();

  const handleChange = () => dispatch(toggleTaskStatus(id));

  return (
    <div className="d-flex justify-content-sm-between mb-4">
      <Form.Check
        type={FORM_TYPE.CHECKBOX}
        onChange={handleChange}
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
