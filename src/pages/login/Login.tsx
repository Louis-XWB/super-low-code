import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTitle } from 'ahooks'
import { Button } from 'antd'

const Login: FC = () => {
  useTitle('SuperLowCode - 登录')

  const nav = useNavigate()

  return (
    <div>
      <h1>Login</h1>
      <Button onClick={() => nav(-1)}>返回</Button>
    </div>
  )
}

export default Login
