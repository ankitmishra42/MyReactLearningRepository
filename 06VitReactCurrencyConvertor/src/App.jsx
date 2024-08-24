import { useState } from 'react';
// import {UseCurrencyInfo} from './hooks/UseCurrencyInfo';
import {InputBox} from './components/InputBox';
import './App.css';
import UseCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = UseCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }
  return (
    <>
      
      <h1 className='text-3xl bg-orange-500 rounded-md'>Currency App With Ankit!</h1>
    </>
  )
}

export default App
