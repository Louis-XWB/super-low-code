import React, { FC, useState, useMemo } from 'react'

const Demo: FC = () => {
  console.log('render')

  const [num1, setNum1] = useState(10)
  const [num2, setNum2] = useState(20)

  const [text, setText] = useState('hello')

  const total = useMemo(() => {
    console.log('total')
    return num1 + num2
  }, [num1, num2])

  return (
    <div>
      <h1>useMemo</h1>
      <p>sum: {total}</p>
      <button onClick={() => setNum1(num1 + 1)}>num1 + 1: {num1}</button>
      <button onClick={() => setNum2(num2 + 1)}>num2 + 1: {num2}</button>

      <input type="text" onChange={e => setText(e.target.value)} value={text} />
    </div>
  )
}

export default Demo
