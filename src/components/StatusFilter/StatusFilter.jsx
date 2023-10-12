import { useSelector, useDispatch } from "react-redux";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import { BUTTON_NAMES, STATUS_FILTERS } from "./constants";
import getStatusFilterSelector from "./selectors";
import { setStatusFilter } from "./actions";
import { BUTTON_VARIANTS, FORM_TYPE } from "../../helpers/constants";

export default function StatusFilter() {
  const status = useSelector(getStatusFilterSelector);
  const dispatch = useDispatch();

  return (
    <ButtonGroup>
      <ToggleButton
        type={FORM_TYPE.RADIO}
        checked={status === STATUS_FILTERS.ALL}
        variant={BUTTON_VARIANTS.PRIMARY}
        onClick={() => dispatch(setStatusFilter(STATUS_FILTERS.ALL))}
      >
        {BUTTON_NAMES.ALL}
      </ToggleButton>
      <ToggleButton
        type={FORM_TYPE.RADIO}
        checked={status === STATUS_FILTERS.ACTIVE}
        variant={BUTTON_VARIANTS.PRIMARY}
        onClick={() => dispatch(setStatusFilter(STATUS_FILTERS.ACTIVE))}
      >
        {BUTTON_NAMES.ACTIVE}
      </ToggleButton>
      <ToggleButton
        type={FORM_TYPE.RADIO}
        checked={status === STATUS_FILTERS.COMPLETED}
        variant={BUTTON_VARIANTS.PRIMARY}
        onClick={() => dispatch(setStatusFilter(STATUS_FILTERS.COMPLETED))}
      >
        {BUTTON_NAMES.COMPLETED}
      </ToggleButton>
    </ButtonGroup>
  );
}
