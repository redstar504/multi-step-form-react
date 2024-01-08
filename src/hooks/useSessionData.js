import { useLayoutEffect, useState } from 'react'

const loadJSON = key => key && JSON.parse(sessionStorage.getItem(key))
const saveJSON = (key, data) => sessionStorage.setItem(key, JSON.stringify(data))
const clearJSON = (key) => sessionStorage.removeItem(key)

export const useSessionData = () => {
  const [data, setData] = useState(loadJSON('data'))

  const reset = () => {
    console.log('Clearing all data')
    setData('')
    clearJSON('data')
  }

  useLayoutEffect(() => {
    if (!data) {
      return
    }
    console.log(`Saving data to JSON store!`, data)
    saveJSON('data', data)
  }, [data])

  return [data, setData, reset]
}