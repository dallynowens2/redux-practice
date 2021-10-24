import axios from "axios";

export const getCurrenciesList = async () => {
    const res = await axios.get("https://api.coinbase.com/v2/currencies")
    //console.log(res.data)
    return res.data
}