import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import styles from './MainLayout.module.scss'
import Logo from '../components/Logo'
import UserInfo from '../components/UserInfo'

const MainLayout: FC = () => {
  const { Header, Footer, Content } = Layout

  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>{/* <UserInfo /> */}</div>
      </Header>

      <Content className={styles.main}>
        <Outlet />
      </Content>

      <Footer className={styles.footer}>Hack Quest &copy;2023 - present. created by Novar</Footer>
    </Layout>
  )
}

export default MainLayout
