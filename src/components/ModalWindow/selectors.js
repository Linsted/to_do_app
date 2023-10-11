import { createSelector } from "reselect";
import { MODAL_KEY } from "./constants";

const getModalStatus = (state) => state[MODAL_KEY];

const isModalOpenSelector = createSelector(
  getModalStatus,
  (modal) => modal.isModalOpen
);

export default isModalOpenSelector;
