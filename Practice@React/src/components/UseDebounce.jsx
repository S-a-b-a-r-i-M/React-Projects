import { useState } from "react"
import { useEffect } from "react"

export const useDebounce = (value, delay=400) => {
  const [debouceValue, setDebounceValue] = useState(value)

  useEffect(()=>{
    const handleTrigger = setTimeout(() => {
      console.log(value)
      setDebounceValue(value)
    }, delay)

    return () => clearTimeout(handleTrigger)
  }, [value, delay])

  return debouceValue
}