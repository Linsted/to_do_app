import ListGroup from "react-bootstrap/ListGroup";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";
import TaskStatusCheckbox from "../TaskStatusCheckbox/TaskStatusCheckbox";
import TaskButtonGroup from "../TaskButtonGroup/TaskButtonGroup";

export default function TaskItem({ title, text, id, completed }) {
  return (
    <ListGroup.Item as="li">
      {
        <Card style={{ width: "38rem" }}>
          <Card.Body>
            <TaskStatusCheckbox completed={completed} id={id} />
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
          <TaskButtonGroup id={id} />
        </Card>
      }
    </ListGroup.Item>
  );
}

TaskItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
