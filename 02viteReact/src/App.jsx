import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function asc() {
    //console.log(count)
    if (count<20) {
      setCount(count + 1)
    }
  }

  let dsc = () => {
    //console.log(count)
    if (count>0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <h2 className='h1mi'>Vite + React By Ankit Mishra {count}</h2>
      <div className="card">
        <button onClick={asc}>
          count is {count}
        </button>
      </div>
      
      <p className="read-the-docs">
        Click on these button for asc or dsc {count}
      </p>

      <div className="card">
        <button onClick={dsc}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
