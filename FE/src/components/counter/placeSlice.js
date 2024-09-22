import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    place:'',
};

const placeSlice = createSlice({
    name: 'placeName',
    initialState,
    reducers: {
        submitPlace: (state,action) => {
            state.place = action.payload;
        }
    },
});

export const { submitPlace } = placeSlice.actions;
export default placeSlice.reducer;
