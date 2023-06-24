import React, { FC, useState, useEffect, useRef } from 'react'

const Demo: FC = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef(count)

  useEffect(() => {
    countRef.current = count
  }, [count])

  function alertCount() {
    setTimeout(() => {
      // alert('count: ' + count)
      alert('count: ' + countRef.current)
    }, 3000)
  }

  return (
    <>
      <h1>useContext</h1>
      <div>
        <p style={{ color: 'red', fontSize: '20px' }}>count: {count}</p>
        <button onClick={() => setCount(count + 1)}>count + 1</button>
        <button onClick={alertCount}>alert count</button>
      </div>
    </>
  )
}

export default Demo
