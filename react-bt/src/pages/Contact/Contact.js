import React, {useState} from 'react'

export default function Contact() {
  const [number, setNumber] = useState(0)
  const Increment = () => {
    setNumber(number + 1);
  }
  const Decrement = () => {
    setNumber(number - 1);
  }
  const PreviousState = () => {
    setNumber((prev)=>prev+2)
  }
  return (
    <>
    <h2>Number Counter</h2>
    <h3>Current value: {number}</h3>
    <button className="btn btn-warning" onClick={Increment}>Increment</button>
    <button className="btn btn-warning" onClick={Decrement}>Decrement</button>
    <button className="btn btn-warning" onClick={PreviousState}>IncrementBy2</button>
    </>
  )
}
