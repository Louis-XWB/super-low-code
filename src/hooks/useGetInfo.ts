import { useState, useEffect } from 'react'

function getInfo(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(new Date().toString())
    }, 2000)
  })
}

function useGetInfo() {
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState('')

  useEffect(() => {
    getInfo().then(res => {
      setLoading(false)
      setInfo(res)
    })
  }, [])

  return { loading, info }
}

export default useGetInfo
