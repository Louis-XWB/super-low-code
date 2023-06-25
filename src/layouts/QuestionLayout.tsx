import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './ManagerLayout.module.scss'

const MainLayout: FC = () => {
  return (
    <>
      <p>Question Layout</p>
      <div className={styles.right}>
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout
