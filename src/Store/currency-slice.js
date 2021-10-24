import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const currencySlice = createSlice({
    name: 'currency',
    initialState:{
        currencies: [],
    },
    reducers:{
        addCurrencyData (state){
            state.currencies.push([...state])
        }

    }
});

export const getCurrencyData = () =>{
    return async (dispatch) =>{
        const res = await axios.get("https://api.coinbase.com/v2/currencies")
        dispatch(currencyActions.addCurrencyData(res))
    }
}

export const currencyActions = currencySlice.actions;

export default currencySlice;