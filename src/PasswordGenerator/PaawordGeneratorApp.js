import React, { useCallback, useEffect, useRef, useState } from 'react'

function PasswordGeneratorApp() {

  const [length , SetLength] = useState(8)
  const [numAllowed , SetNumAllowed] = useState(false);
  const [chartAllowed , SetChartAllowed] = useState(false)
  const [password , SetPassword] = useState("")
    
   const PasswordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = " "
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(chartAllowed) str += "!@#$%^&*-_+=[]{}~`"

  for(let i = 1; i <= length ; i++){
    let chart = Math.floor(Math.random() * str.length + 1)
  
   pass += str.charAt(chart)
  } 
     SetPassword(pass)    

   
  //optimize
  }, [length , numAllowed , chartAllowed , SetPassword])



  const copyPasswords = useCallback(() => {
    PasswordRef.current?.select();
    PasswordRef.current?.setSelectionRange(0 , 999)
       window.navigator.clipboard.writeText(password)
  },[password])

   useEffect(() => {
passwordGenerator()
   }, [length , numAllowed , chartAllowed , passwordGenerator])
  

  return (
   <>
   <h1 className='text-4xl text-center'> Password Generator</h1>
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">

   <div className="flex shadow rounded-lg overflow-hidden mb-4">


    <input ref={PasswordRef} type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly
    />

    <button onClick={copyPasswords}>Copy</button> 
 </div>


 <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {SetLength(e.target.value)}}
          />
         <label>Length:{length}</label>
   </div>
       <div className='flex items-center gap-x-1'>
       <input 
        type="checkbox"
        id='numberInput'  
        defaultValue={numAllowed} 
         className='cursor-pointer'
         onChange={() => {SetNumAllowed((prev) => !prev)}}
         />
         <label htmlFor='numberInput'>Numbers</label>
       </div>
       
       <div className='flex items-center gap-x-1'>
       <input 
        type="checkbox"
        id='CharactertInput'  
        defaultValue={chartAllowed} 
         onChange={() => {SetChartAllowed((prev) => !prev)}}
         />
         <label htmlFor='CharacterInput'>Character</label>
       </div>
   </div>
   </div>
   </>
  )
}

export default  PasswordGeneratorApp;