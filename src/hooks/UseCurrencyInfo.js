import {useEffect, useState} from "react"


function UseCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_RU11DQiLvJ5jzjkzwKA6DV6UXH29fAj5iSDLPptl&base_currency=${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default UseCurrencyInfo;