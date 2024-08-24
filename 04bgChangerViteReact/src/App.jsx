import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState('white')


  function red() {
    setColor('red')
  }
  let black = ()=> {
    setColor('black')
  }
  let olive = ()=> setColor('olive')

  return (
    <div className="w-screen h-screen duration-200 rounded" style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-1 rounded-2xl'>
            <button onClick={red} style={{backgroundColor: "red"}}>color Red</button>
            <button onClick={black} style={{backgroundColor: "black"}}>color Black</button>
            <button onClick={()=>setColor('yellow')} style={{backgroundColor: "yellow"}}>color Yellow</button>
            <button onClick={olive} style={{backgroundColor: "olive"}}>color Olive</button>
          </div>
        </div>
    </div>
  )
}

export default App