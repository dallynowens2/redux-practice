import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {currencyIsVisible: true},
    reducers:{
        toggle(state){
            state.currencyIsVisible=!state.currencyIsVisible
        }

    }
})

export const uiActions = uiSlice.actions

export default uiSlice