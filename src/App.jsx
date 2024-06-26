
// // Custom Hook in react js



import React, { useState } from 'react'
import UseCurrencyInfo from './Hooks/useCurrencyInfo'


function App() {

   const [amount , setAmount] = useState(0)
   const [from , setFrom] = useState('usd')
   const [to ,setTo] = useState('inr')
   const [convertdAmount , setConvertedAmount] = useState(0)
  return (
   <>
   <UseCurrencyInfo/>
   </>
  )
}

export default App