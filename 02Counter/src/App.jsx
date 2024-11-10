import { useState } from 'react'
import './App.css'

function App() {
  const [ count, setCount ] = useState(4)
  
  const addValue = () => {
    setCount(count + 1)
  }
  const decreaseValue = () => {
    setCount(count - 1)
  }
  const decreaseValueBy5 = () => {
    setCount((prevCount) => prevCount - 1)
    setCount((prevCount) => prevCount - 1)
    setCount((prevCount) => prevCount - 1)
    setCount((prevCount) => prevCount - 1)
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <>
      <h1>React Recap Course with Hitesh {count}</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Add Value</button>{' '}
      <button onClick={decreaseValue}>Decrease Value</button>{' '}
      <button onClick={decreaseValueBy5}>Decrease Value by 5</button>
      <footer>{count}</footer>
    </>
  );
}

export default App
