import { configureStore } from '@reduxjs/toolkit';
import chart from '../features/chart/chartSlice';

export const store = configureStore({
    reducer: {
        chart,
    }
})