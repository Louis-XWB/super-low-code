import React, { FC, useEffect } from 'react'
import './QuestionCard.css'
import classnames from 'classnames'
import styles from './QuestionCard.module.scss'

type propsType = {
  id: string
  title: string
  isPublished: boolean
  deleteQuestion?: (id: string) => void
  publishQuestion?: (id: string) => void
}

const QuestionCard: FC<propsType> = props => {
  const { id, title, isPublished, deleteQuestion, publishQuestion } = props

  function edit(id: string) {
    console.log('edit ', id)
  }

  function del(id: string) {
    console.log('delete ', id)
    deleteQuestion && deleteQuestion(id)
  }

  function publish(id: string) {
    console.log('publish ', id)
    publishQuestion && publishQuestion(id)
  }

  useEffect(() => {
    console.log('QuestionCard render')
    return () => {
      console.log('QuestionCard unmount')
    }
  }, [])

  // let itemClassName = 'list-item'
  // if (isPublished) {
  //   itemClassName += ' published'
  // }

  // const itemClassName = classnames('list-item', {
  //   published: isPublished,
  // })

  return (
    <div className={classnames(styles['list-item'], { [styles.published]: isPublished })}>
      <strong>{title}</strong>
      &nbsp;
      {isPublished ? <span className={styles['published-span']}>已发布</span> : <span>未发布</span>}
      &nbsp;
      <button onClick={() => edit(id)}>编辑问卷 </button>
      &nbsp;
      <button onClick={() => del(id)}>删除问卷</button>
      &nbsp;
      <button onClick={() => publish(id)}>发布问卷</button>
    </div>
  )
}

export default QuestionCard
