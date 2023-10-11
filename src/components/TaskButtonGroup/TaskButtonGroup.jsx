import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

import { BUTTONS_TEXT } from "./constants";
import { useDispatch } from "react-redux";
import { deleteTask } from "../Tasks/actions";
import { setModalWindow } from "../ModalWindow/actions";
import { BUTTON_VARIANTS } from "../../helpers/constants";

export default function TaskButtonGroup({ id }) {
  const dispatch = useDispatch();

  const handleDeleteClick = () => dispatch(deleteTask(id));

  const handleEditClick = () => dispatch(setModalWindow(id));

  return (
    <ButtonGroup size="sm" style={{ width: "14rem", marginInline: "auto" }}>
      <Button onClick={handleEditClick} variant={BUTTON_VARIANTS.PRIMARY}>
        {BUTTONS_TEXT.EDIT}
      </Button>
      <Button onClick={handleDeleteClick} variant={BUTTON_VARIANTS.SECONDARY}>
        {BUTTONS_TEXT.DELETE}
      </Button>
    </ButtonGroup>
  );
}

TaskButtonGroup.propTypes = {
  id: PropTypes.string.isRequired,
};
