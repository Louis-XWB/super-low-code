import React, { useState, FC } from 'react'

const Demo: FC = () => {
  const [userInfo, setUserInfo] = useState({ name: 'Jane', age: 18 })

  function changeAge() {
    setUserInfo({ ...userInfo, age: userInfo.age + 1 })
  }

  const [list, setList] = useState(['x', 'y', 'z'])

  function addItem() {
    setList(list.concat('b'))
  }

  return (
    <div>
      <h1>State 不可变数据</h1>
      <div>{JSON.stringify(userInfo)}</div>
      <button onClick={changeAge}>change age</button>

      <div>{JSON.stringify(list)}</div>
      <button onClick={addItem}>add item</button>
    </div>
  )
}

export default Demo
