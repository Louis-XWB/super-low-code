import React, { FC, useState } from 'react'
import QuestionCard from '../../components/QuestionCard'
import styles from './Common.module.scss'
import { useSearchParams } from 'react-router-dom'
import { useTitle } from 'ahooks'
import { Typography, Empty } from 'antd'

const { Title } = Typography

const defaultQuestionData = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: true,
    isStar: false,
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
    isStar: false,
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

const List: FC = () => {
  useTitle('SuperLowCode - 我的问卷')

  const [searchParams] = useSearchParams()
  const keyword = searchParams?.get('keyword') || ''

  const [questionList, setQuestionList] = useState(defaultQuestionData)

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>（搜索）</div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 && <Empty description="暂无数据" />}
        {questionList.length > 0 &&
          questionList.map(question => {
            const { _id } = question
            return <QuestionCard key={_id} {...question} />
          })}
      </div>
      <div className={styles.footer}>load more</div>
    </>
  )
}

export default List
