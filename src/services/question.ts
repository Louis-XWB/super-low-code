import { type } from 'os'
import axios, { ResDataType } from './ajax'

type SearchOptions = {
  keyword?: string
  isStar?: boolean
  isDeleted?: boolean
}

export async function getQuestionService(id: string): Promise<ResDataType> {
  const url = `/api/question/${id}`
  const data = (await axios.get(url)) as ResDataType
  return data
}

export async function createQuestionsService(): Promise<ResDataType> {
  const url = `/api/question`
  const data = (await axios.post(url)) as ResDataType
  return data
}

export async function getQuestionListService(opt: Partial<SearchOptions>): Promise<ResDataType> {
  const url = `/api/question`
  const data = (await axios.get(url, { params: opt })) as ResDataType
  return data
}
