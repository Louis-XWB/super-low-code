import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTitle } from 'ahooks'

const Login: FC = () => {
  useTitle('SuperLowCode - 登录')

  const nav = useNavigate()

  useTitle('SuperLowCode - 登录')

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => nav(-1)}>返回</button>
    </div>
  )
}

export default Login
