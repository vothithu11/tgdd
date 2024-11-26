import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/components/slice/counterSlice';
import placeReducer from '@/components/slice/placeSlice';
import filterReducer from '@/components/slice/filterSlice';
import nameReducer from '@/components/slice/nameUserSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        placeName: placeReducer,
        filter: filterReducer,
        userName:nameReducer,
    }
});
