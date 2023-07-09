import React, { FC, useState } from 'react'
import QuestionCard from '../../components/QuestionCard'
import styles from './Common.module.scss'
import { useSearchParams } from 'react-router-dom'
import { useTitle } from 'ahooks'
import { Empty, Spin, Typography } from 'antd'
import ListSearch from '../../components/ListSearch'
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'

const { Title } = Typography

const defaultQuestionData = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: true,
    isStar: true,
    answerCount: 5,
    createdAt: '6月24日 10:00',
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublished: false,
    isStar: true,
    answerCount: 3,
    createdAt: '6月26日 11:00',
  },
  {
    _id: 'q3',
    title: '问卷3',
    isPublished: true,
    isStar: true,
    answerCount: 2,
    createdAt: '6月27日 15:00',
  },
  {
    _id: 'q4',
    title: '问卷4',
    isPublished: false,
    isStar: true,
    answerCount: 15,
    createdAt: '6月28日 12:00',
  },
]

const Star: FC = () => {
  useTitle('SuperLowCode - 星标问卷')

  const { data = {}, loading } = useLoadQuestionListData({ isStar: true })
  const { list = [], total } = data

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>

      <div className={styles.content}>
        {loading && (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        )}
        {!loading && list.length === 0 && list.length === 0 && <Empty description="暂无数据" />}
        {!loading &&
          list.length > 0 &&
          list.map((question: any) => {
            const { _id } = question
            return <QuestionCard key={_id} {...question} />
          })}
      </div>

      <div className={styles.footer}>分页</div>
    </>
  )
}

export default Star
