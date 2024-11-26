import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    products: [],
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            const product = state.products.find((p) => p._id === action.payload._id);
            if (product) {
                product.quantity += 1;
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }
            state.value = state.products.reduce((total, product) => total + product.quantity, 0);
        },
        decrement: (state, action) => {
            const product = state.products.find((p) => p._id === action.payload._id);
            if (product) {
                product.quantity -= 1;
                if (product.quantity === 0) {
                    state.products = state.products.filter((p) => p._id !== action.payload._id);
                }
            }
            state.value = state.products.reduce((total, product) => total + product.quantity, 0);
        },
        increase:(state, action) => {
            const product = state.products.find((p) => p._id === action.payload._id);
            if (product) {
                product.quantity += action.payload.quantity;
            } else {
                state.products.push({ ...action.payload, quantity: action.payload.quantity });
            }
            state.value = state.products.reduce((total, product) => total + product.quantity, 0);
        },
    },
});

export const { increment, decrement, increase } = counterSlice.actions;
export default counterSlice.reducer;
