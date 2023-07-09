import React, { FC, useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import styles from './ManagerLayout.module.scss'
import { Button, Space, Divider, message } from 'antd'
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons'
import { createQuestionsService } from '../services/question'
import { QUESTION_EDIT_PATHNAME } from '../router'
import { useRequest } from 'ahooks'

const MainLayout: FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()

  // async function createQuestions() {
  //   setLoading(true)
  //   const data = await createQuestionsService()
  //   const { id } = data || {}
  //   if (id) {
  //     nav(`${QUESTION_EDIT_PATHNAME}/${id}`)
  //     message.success('创建成功')
  //   }
  //   setLoading(false)
  // }

  const { loading, run: createQuestions } = useRequest(createQuestionsService, {
    manual: true,
    onSuccess: data => {
      const { id } = data || {}
      if (id) {
        nav(`${QUESTION_EDIT_PATHNAME}/${id}`)
        message.success('创建成功')
      }
    },
  })

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            onClick={createQuestions}
            disabled={loading}
          >
            新建问卷
          </Button>
          <Divider style={{ borderTop: 'transparent' }} />
          <Button
            type={pathname.startsWith('/manager/list') ? 'default' : 'text'}
            size="large"
            icon={<BarsOutlined />}
            onClick={() => nav('/manager/list')}
          >
            我的问卷
          </Button>
          <Button
            type={pathname.startsWith('/manager/star') ? 'default' : 'text'}
            size="large"
            icon={<StarOutlined />}
            onClick={() => nav('/manager/star')}
          >
            星标问卷
          </Button>
          <Button
            type={pathname.startsWith('/manager/trash') ? 'default' : 'text'}
            size="large"
            icon={<DeleteOutlined />}
            onClick={() => nav('/manager/trash')}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
