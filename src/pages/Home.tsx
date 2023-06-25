import React, { FC } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useTitle } from 'ahooks'

const Home: FC = () => {
  useTitle('SuperLowCode - 首页')

  const nav = useNavigate()

  const clickHandle = () => {
    // nav('/login?b=20')
    nav({ pathname: '/login', search: 'b=20' })
  }

  return (
    <div>
      <h1>Home</h1>
      <div>
        <button onClick={clickHandle}>登录</button>
        <Link to="/register?a=10">注册</Link>
      </div>
    </div>
  )
}

export default Home
