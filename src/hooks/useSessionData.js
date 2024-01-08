import { useEffect, useLayoutEffect, useState } from 'react'
import { set } from 'react-hook-form'

const loadJSON = key => key && JSON.parse(sessionStorage.getItem(key))
const saveJSON = (key, data) => sessionStorage.setItem(key, JSON.stringify(data))
const clearJSON = (key) => sessionStorage.removeItem(key)

export const useSessionData = () => {
  const [data, setData] = useState(loadJSON('data'))
  const [isResetting, setIsResetting] = useState(false)

  const reset = () => {
    setIsResetting(true)
  }

  useEffect(() => {
    if (!data) {
      return
    }
    saveJSON('data', data)
  }, [data])

  useEffect(() => {
    if (isResetting) {
      clearJSON('data')
      setData(null)
    }
  }, [data, isResetting])

  return [data, setData, reset, isResetting, setIsResetting]
}