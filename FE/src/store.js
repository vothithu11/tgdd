import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/components/counter/counterSlice';
import nameUserReducer from '@/components/counter/nameUserSlice';
import uiReducer from '@/components/counter/uiSlice';
import placeReducer from '@/components/counter/placeSlice';
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        nameUser: nameUserReducer,
        ui: uiReducer,
        placeName: placeReducer,
    }
});
