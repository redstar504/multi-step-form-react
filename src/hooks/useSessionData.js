import { useEffect, useState } from 'react'

const loadJSON = key => key && JSON.parse(sessionStorage.getItem(key))
const saveJSON = (key, data) => sessionStorage.setItem(key, JSON.stringify(data))
const clearJSON = (key) => sessionStorage.removeItem(key)

export const useSessionData = () => {
  const [data, setData] = useState(loadJSON('data'));

  useEffect(() => {
    if (!data) {
      return
    }
    saveJSON('data', data)
  }, [data])

  const reset = () => {
    setData("")
    clearJSON('data')
  }

  return [data, setData, reset]
}