import { createSelector } from "reselect";
import { MODAL_KEY } from "./constants";

const getModalStatus = (state) => state[MODAL_KEY];

export const isModalOpenSelector = createSelector(
  getModalStatus,
  (modal) => modal.isModalOpen
);

export const getCurrentUserSelector = createSelector(
  getModalStatus,
  (modal) => modal.id
);
