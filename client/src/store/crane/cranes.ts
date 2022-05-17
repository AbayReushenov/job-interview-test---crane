import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Crane } from '../../api/crane';


export interface CraneState {
  cranes: Crane[];
  isLoading: boolean;
}

const initialState: CraneState = {
  cranes: [],
  isLoading: false,
};

const cranes = createSlice({
  name: 'cranes',
  initialState,
  reducers: {
    fillCranes: (state: CraneState, action: PayloadAction<Crane[]>) => {
      state.cranes = action.payload;
      state.isLoading = false;
    }
  },
});

export const { actions, reducer } = cranes;
