import React, {useId} from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    CurrencyOptions = [],
    selectCurrency = "inr",
    amountDisable = false,
    CurrencyDisable = false,
    className = "",
}) {
    const amountInputId = useId()
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    // onchange aise use krna h ki components pta lg jaaye iske liye ek event fire kr ske hai or usse ek method call kr skte hai
                    //ab yhape onAmountChange single bhi pass kr skte the pr default value kuch nhi dal rkhi apn ne uper is agar kisi ne iski value pass nhi kri toh ye crash kr skta hai isliye &&
                    // onAmountChange && onAmountChange(Number(e.target.value)): This is a conditional expression. It checks if onAmountChange is truthy (not null, undefined, false, or 0), and if it is, it calls onAmountChange with the parsed numeric value of e.target.value.
                    //e.target.value: Gets the current value of the input field when the change event occurs.
                    //Number(e.target.value): Converts the value to a numeric type.

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={CurrencyDisable}
                >
                    
                        {CurrencyOptions.map((currency) =>
                        (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                            // jb bhi loop lgayenge jsx ke ander loop lgayenge kyuki jsx se he dom element bn reh hai
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;