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
        console.log('Opening modal');
        state.cartIsVisible = true;
      },
      closeModal: (state) => {
        console.log('Closing modal');
        state.cartIsVisible = false;
      },
    },
  });
  
export const { openModal, closeModal } = uiSlice.actions;
export default uiSlice.reducer;