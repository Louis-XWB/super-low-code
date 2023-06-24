import React, { FC, useState, useCallback } from 'react'

const Demo: FC = () => {
  const [text, setText] = useState('hello')

  const fn1 = () => {
    console.log('fn1')
  }

  const fn2 = useCallback(() => {
    console.log('fn2')
  }, [text])
  return (
    <>
      <h1>useCallback</h1>

      <button onClick={fn1}>fn1</button>
      <button onClick={fn2}>fn2</button>

      <input type="text" onChange={e => setText(e.target.value)} value={text} />
    </>
  )
}

export default Demo
