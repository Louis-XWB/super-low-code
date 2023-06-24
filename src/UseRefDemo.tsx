import React, { FC, useRef } from 'react'

const Demo: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  function selectInput() {
    inputRef?.current?.select()
  }

  const nameRef = useRef('Jane')

  function changeName() {
    nameRef.current = 'Jack'
    console.log(nameRef.current)
  }

  return (
    <div>
      <input type="text" ref={inputRef} defaultValue="Hello World" />
      <button onClick={selectInput}>选中 input</button>

      <div>
        <p>name: {nameRef.current}</p>
        <button onClick={changeName}>change name</button>
      </div>
    </div>
  )
}

export default Demo
