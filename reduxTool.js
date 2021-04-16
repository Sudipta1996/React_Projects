import {createSlice,configureStore} from "@reduxjs/toolkit"

const Counterslice = createSlice({
    name:"Counter",
    initialState: {
        counter:0
    },
    reducers:{
        doIncrement: state => {
            state.counter = state.counter + 1
        },
        doDecrement: state => {
            state.counter = state.counter - 1
        },

}

})
export const { doIncrement,doDecrement} = Counterslice.actions;
export const store = configureStore({
    reducer: Counterslice.reducer
})