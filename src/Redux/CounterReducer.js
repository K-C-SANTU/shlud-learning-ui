import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    counter: 0,
    range: 1
}
export const counterReducer = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.counter += state.range;
        },
        decrement: state=> {
            state.counter -= state.range;
        },
        setRange: (state, action) => {
            state.range = action.payload;
        },
        reset: state => state = initialState,

    }
})

export const { increment, decrement, setRange, reset } = counterReducer.actions

export default counterReducer.reducer