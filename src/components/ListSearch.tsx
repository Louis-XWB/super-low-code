import React, { FC, useEffect, useState } from 'react'
import { Input } from 'antd'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { LIST_SEARCH_PARAM_KEY } from '../constant'

const { Search } = Input

const ListSearch: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const nav = useNavigate()
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const keyword = searchParams?.get(LIST_SEARCH_PARAM_KEY) || ''
    setSearchValue(keyword)
  }, [searchParams])

  function handleSearch(value: string) {
    nav({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
    })
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value)
    console.log(e.target.value)
  }

  return (
    <>
      <Search
        placeholder="请输入关键词"
        value={searchValue}
        onSearch={handleSearch}
        onChange={handleChange}
        style={{ width: '200px' }}
        allowClear
      />
    </>
  )
}

export default ListSearch
