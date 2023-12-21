import { useEffect, useState } from "react";
// custom hook mai built hook use kr skte hai

function useCurrencyInfo(currency){
    const [data, setData] = useState({})//isme empty obj dala hai incase fetch call nhi aa rhi hai toh empty obj pe loop lgayenge toh crash nhi krega
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        //ab ye data json mai convert ho gya is liye isko hold krna pdega or agar data ko regular variable mai hold kr dunga toh ui mai kbhi update nhi hoga toh ye hook usestate se directly value return kra dete hai
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;