import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "..";

export const getCranes = (state: RootState) => state.cranes;

export const selectCranes = createSelector(getCranes, cranes => {
  return cranes.cranes;
});
