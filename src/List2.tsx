import React, { useState, useEffect, FC } from 'react'
import QuestionCard from './components/QuestionCard'
import { produce } from 'immer'

const Demo: FC = () => {
  const [questionList, setQuestionList] = useState([
    { id: 'q1', title: '问卷1', isPublished: true },
    { id: 'q2', title: '问卷2', isPublished: false },
    { id: 'q3', title: '问卷3', isPublished: true },
    { id: 'q4', title: '问卷4', isPublished: false },
  ])

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('List2 mount')
    return () => {
      console.log('List2 unmount')
    }
  }, [])

  useEffect(() => {
    console.log('questionList update')
  }, [questionList])

  useEffect(() => {
    console.log('count update')
  }, [count])
  function add() {
    setCount(count + 1)
    // setQuestionList(
    //   questionList.concat({
    //     id: 'q' + Math.random().toString().slice(-4),
    //     title: '问卷' + (questionList.length + 1),
    //     isPublished: false,
    //   })
    // )

    setQuestionList(
      produce(draft => {
        draft.push({
          id: 'q' + Math.random().toString().slice(-4),
          title: '问卷' + (questionList.length + 1),
          isPublished: false,
        })
      })
    )
  }

  function del(id: string) {
    setCount(count - 1)
    // setQuestionList(questionList.filter(question => question.id !== id))
    setQuestionList(
      produce(draft => {
        const index = draft.findIndex(question => question.id === id)
        draft.splice(index, 1)
      })
    )
  }

  function publish(id: string) {
    // setQuestionList(
    //   questionList.map(question => {
    //     if (question.id !== id) {
    //       return question
    //     }
    //     return { ...question, isPublished: true }
    //   })
    // )

    setQuestionList(
      produce(draft => {
        const index = draft.findIndex(question => question.id === id)
        draft[index].isPublished = true
      })
    )
  }

  return (
    <div>
      <h1>问卷列表页</h1>
      <div>
        {questionList.map(question => {
          const { id, title, isPublished } = question
          return (
            <QuestionCard
              key={id}
              id={id}
              title={title}
              isPublished={isPublished}
              deleteQuestion={del}
              publishQuestion={publish}
            />
          )
        })}
      </div>
      <div>
        <button onClick={add}>新增问卷</button>
      </div>
    </div>
  )
}

export default Demo
