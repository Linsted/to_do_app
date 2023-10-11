import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

import { BUTTONS_TEXT, BUTTON_VARIANTS } from "./constants";
import { useDispatch } from "react-redux";
import { deleteTask } from "../Tasks/actions";

export default function TaskButtonGroup({ id }) {
  const dispatch = useDispatch();
  return (
    <ButtonGroup size="sm" style={{ width: "14rem", marginInline: "auto" }}>
      <Button variant={BUTTON_VARIANTS.PRIMARY}>{BUTTONS_TEXT.EDIT}</Button>
      <Button
        onClick={() => dispatch(deleteTask(id))}
        variant={BUTTON_VARIANTS.SECONDARY}
      >
        {BUTTONS_TEXT.DELETE}
      </Button>
    </ButtonGroup>
  );
}

TaskButtonGroup.propTypes = {
  id: PropTypes.string.isRequired,
};
