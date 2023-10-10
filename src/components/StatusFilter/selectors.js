import { createSelector } from "reselect";
import { STATUS_FILTER_KEY } from "./constants";

const getStatusFilter = (state) => state[STATUS_FILTER_KEY];

const getStatusFilterSelector = createSelector(
  getStatusFilter,
  (statusFilter) => statusFilter.status
);

export default getStatusFilterSelector;
