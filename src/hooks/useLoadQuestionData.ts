import { useParams } from 'react-router-dom'
import { getQuestionService } from '../services/question'
import { useRequest } from 'ahooks'

function useLoadQuestionData() {
  const { id = '' } = useParams()

  // useEffect(() => {
  //   async function getQuestion() {
  //     const data = await getQuestionService(id).catch(err => {
  //       console.log('err', err)
  //     })
  //     setQuestion(data || {})
  //     setLoading(false)
  //   }
  //   getQuestion()
  // }, [])

  async function getQuestion() {
    return await getQuestionService(id)
  }

  const { loading, error, data } = useRequest(getQuestion)
  return { loading, error, data }
}

export default useLoadQuestionData
