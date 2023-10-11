import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { setModalWindow } from "../ModalWindow/actions";

export default function Header() {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(setModalWindow());

  return (
    <div className="position-relative">
      <h1> Task Hub </h1>
      <Button
        onClick={handleClick}
        className="position-absolute top-0 start-0"
        variant="success"
      >
        Add Task
      </Button>
    </div>
  );
}
