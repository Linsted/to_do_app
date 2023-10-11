import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import { setModalWindow } from "./actions";
import { isModalOpenSelector, getCurrentUserSelector } from "./selectors";

export default function ModalWindow({ children }) {
  const isModalOpen = useSelector(isModalOpenSelector);
  const id = useSelector(getCurrentUserSelector);

  const dispatch = useDispatch();
  console.log(id);

  const handleClose = () => {
    dispatch(setModalWindow());
  };

  return createPortal(
    <Modal show={isModalOpen} onHide={handleClose}>
      <Modal.Header closeButton />

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
