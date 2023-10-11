import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { setModalWindow } from "../ModalWindow/actions";
import { BUTTON_VARIANTS } from "../../helpers/constants";
import { BUTTON_TEXT, TITLE } from "./constants";

export default function Header() {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(setModalWindow());

  return (
    <div className="position-relative">
      <h1>{TITLE}</h1>
      <Button
        onClick={handleClick}
        className="position-absolute top-0 start-0"
        variant={BUTTON_VARIANTS.SUCCESS}
      >
        {BUTTON_TEXT}
      </Button>
    </div>
  );
}
