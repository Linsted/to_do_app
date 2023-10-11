import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import isModalOpenSelector from "./selectors";
import { setModalWindow } from "./actions";

export default function ModalWindow({ children, id }) {
  const isModalOpen = useSelector(isModalOpenSelector);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModalWindow());
  };

  return createPortal(
    <Modal show={isModalOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>,
    document.querySelector("#modal-root")
  );
}
