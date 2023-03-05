import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mobileMenu: false,
};

export const appSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenu = !state.mobileMenu;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleMobileMenu } = appSlice.actions;

export default appSlice.reducer;
