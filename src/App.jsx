import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/UseCurrencyInfo'


function App() {
  const [amount, setAmount] = useState('')
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState('')

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = ()=>{
    const result =  (amount * currencyInfo[to])
    setConvertedAmount(parseFloat(result.toFixed(2)))
  }

  return (
    <>
      <div className='parentDiv'>
        <div className='ChildDivImage'>

        </div>

        <div className='outerDiv'>
          <h2 className='heading'>Paisa hi Paisa</h2>
          <div className='innerDiv'>
            <form onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}>
              <div className='inputHolder'>
                <InputBox 
                label='Convert From'
                amount={amount}
                selectedCurrency={from}
                currencyOptions={options}
                OnCurrencyChange={(currency) => setFrom(currency)}
                OnAmountChange={(amount) => setAmount(amount)}
                />
              </div>

              <div>
                <button className='buttonSwap' onClick={swap}>
                  SWAP</button>
              </div>

               <div className='inputHolder'>
                <InputBox 
                label='To Converted'
                amount={convertedAmount}
                selectedCurrency={to}
                currencyOptions={options}
                OnCurrencyChange={(currency) => setTo(currency)}
                amountDisabled={true}
                />
              </div>

            <button 
            type='submit'
            className='submitBtn'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
