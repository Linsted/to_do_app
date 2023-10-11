import Modal from "react-bootstrap/Modal";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import { setModalWindow } from "./actions";
import { isModalOpenSelector, getCurrentUserSelector } from "./selectors";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import EditTaskForm from "../EditTaskForm/EditTaskForm";

export default function ModalWindow() {
  const isModalOpen = useSelector(isModalOpenSelector);
  const id = useSelector(getCurrentUserSelector);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModalWindow());
  };

  if (!id) {
    return createPortal(
      <Modal show={isModalOpen} onHide={handleClose}>
        <Modal.Header closeButton />
        <Modal.Body>
          <NewTaskForm />
        </Modal.Body>
      </Modal>,
      document.querySelector("#modal-root")
    );
  }

  return createPortal(
    <Modal show={isModalOpen} onHide={handleClose}>
      <Modal.Header closeButton />
      <Modal.Body>{<EditTaskForm id={id} />}</Modal.Body>
    </Modal>,
    document.querySelector("#modal-root")
  );
}
