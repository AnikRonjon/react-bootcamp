import React from 'react'

export default function About() {
  const number = [10, 30, 40, 50, 60]
  return (
    <>
        <h2>This is about page</h2>
        <ul>
          {number.map( (value)=> <li key={value*.1}>{value}</li>)}
        </ul>
    </>
  )
}
