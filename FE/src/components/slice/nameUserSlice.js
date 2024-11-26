import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name:null,
};

const namUserSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        saveName: (state,action) => {
            state.name = action.payload;
        }
    },
});

export const { saveName } = namUserSlice.actions;
export default namUserSlice.reducer;