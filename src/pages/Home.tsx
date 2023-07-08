import React, { FC, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useTitle } from 'ahooks'
import { Button, Typography } from 'antd'
import { MANAGER_LIST_PATHNAME } from '../router'
import styles from './Home.module.scss'
import '../_mock/index.ts'
// import axios from 'axios'

const { Title, Paragraph } = Typography

const Home: FC = () => {
  useTitle('SuperLowCode - 首页')

  // useEffect(() => {
  //   axios.get('/api/test').then(res => {
  //     console.log('res data', res.data)
  //   })
  // }, [])

  const nav = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>SuperLowCode | Online Voting</Title>
        <Paragraph>已累计创建问卷 100 份，发布问卷 90 份，收到问卷 980 份</Paragraph>
        <div>
          <Button type="primary" onClick={() => nav(MANAGER_LIST_PATHNAME)}>
            开始使用
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
