import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import chartService from './chartService';

const initialState = {
    chart: [],
    isLoading: false,
};

export const getAllChart = createAsyncThunk('charts/getAllCharts', async () => {
    try {
        return await chartService.getChart()
    } catch (error) {
        console.error(error);
    }
})

export const chartSlice = createSlice({
    name: 'chart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllChart.fulfilled,(state, action)=> {
            state.chart = action.payload.data
        })
    }
});


    export default chartSlice.reducer;