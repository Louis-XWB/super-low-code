import React, { FC } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useTitle } from 'ahooks'
import { Button, Typography } from 'antd'
import { MANAGER_LIST_PATHNAME } from '../router'
import styles from './Home.module.scss'

const { Title, Paragraph } = Typography

const Home: FC = () => {
  useTitle('Hack Quest')

  const nav = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>Web3 Programming for Everyone</Title>
        <Paragraph style={{ fontSize: '20px' }}>Already 103,783 builders joined</Paragraph>
        <div>
          <Button type="primary" onClick={() => nav('/roadmap')}>
            Start
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
