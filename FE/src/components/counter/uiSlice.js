import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartIsVisible: false,
    products:[]
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
      openModal: (state) => {
        state.cartIsVisible = true;
      },
      closeModal: (state) => {
        state.cartIsVisible = false;
      },
    },
  });
  
export const { openModal, closeModal } = uiSlice.actions;
export default uiSlice.reducer;