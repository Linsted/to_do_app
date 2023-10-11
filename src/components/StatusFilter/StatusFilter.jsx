import { useSelector, useDispatch } from "react-redux";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import { STATUS_FILTERS } from "./constants";
import getStatusFilterSelector from "./selectors";
import { setStatusFilter } from "./actions";
import { BUTTON_VARIANTS } from "../../helpers/constants";

export default function StatusFilter() {
  const status = useSelector(getStatusFilterSelector);
  const dispatch = useDispatch();

  return (
    <ButtonGroup aria-label="Basic example">
      <ToggleButton
        type="radio"
        checked={status === STATUS_FILTERS.ALL}
        variant={BUTTON_VARIANTS.PRIMARY}
        onClick={() => dispatch(setStatusFilter(STATUS_FILTERS.ALL))}
      >
        All
      </ToggleButton>
      <ToggleButton
        type="radio"
        checked={status === STATUS_FILTERS.ACTIVE}
        variant={BUTTON_VARIANTS.PRIMARY}
        onClick={() => dispatch(setStatusFilter(STATUS_FILTERS.ACTIVE))}
      >
        Active
      </ToggleButton>
      <ToggleButton
        type="radio"
        checked={status === STATUS_FILTERS.COMPLETED}
        variant={BUTTON_VARIANTS.PRIMARY}
        onClick={() => dispatch(setStatusFilter(STATUS_FILTERS.COMPLETED))}
      >
        Completed
      </ToggleButton>
    </ButtonGroup>
  );
}
