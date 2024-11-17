import React from 'react'
import { useId } from 'react'

const InputBox = ({
    label,
    amount,
    OnAmountChange,
    OnCurrencyChange,
    selectedCurrency='usd',
    currencyOptions=[],
    amountDisabled=false,
    currencyDisabled=false,
}) => {
    const InputBoxId = useId()

  return (
    <div className='input1'>
      <div className='halfInput'>
        <label htmlFor={InputBoxId} 
        className='label'>
            {label}
        </label>
        <input 
        id={InputBoxId}
        type="number"
        className='inputLabel'
        placeholder='Amount'
        value={amount} 
        onChange={(e) => OnAmountChange && OnAmountChange(Number(e.target.value))}
        disabled={amountDisabled}
        />
      </div>

      <div className='currency1'>
        <p className='pTag'>Currency Converter</p>
        <select className='select'
        value={selectedCurrency}
        disabled={currencyDisabled}
        onChange={(e)=> OnCurrencyChange && OnCurrencyChange(e.target.value)}
        >
            {currencyOptions.map((currency) => (
                <option value={currency} key={currency}>
                    {currency}
                </option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox
