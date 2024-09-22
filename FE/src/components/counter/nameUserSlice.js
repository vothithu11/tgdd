import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value:'',
};

const nameUserSlice = createSlice({
    name: 'nameUser',
    initialState,
    reducers: {
        signin: (state,action) => {
            state.value = action.payload;
        },
        logout: (state, action) => {
            state.value = '';
        },
    },
});

export const { signin, logout } = nameUserSlice.actions;
export default nameUserSlice.reducer;
