import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { addSearch } from '../../../store/searchHistorySlice'

export const useSearch = (debouncedValue: string, inputValue: string) => {
  const [isSuggestionSelected, setIsSuggestionSelected] = useState(false)
  const suggestions = useAppSelector((state) => state.search.suggestions)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (debouncedValue.length > 2 && !isSuggestionSelected) {
      dispatch({ type: 'search/setSuggestions', payload: debouncedValue })
    } else {
      dispatch({ type: 'search/clearSuggestions' })
      setIsSuggestionSelected(false)
    }
  }, [debouncedValue, dispatch, isSuggestionSelected])

  const handleSearch = () => {
    if (inputValue) {
      navigate(`/search/${encodeURIComponent(inputValue)}`)
      dispatch(addSearch(inputValue))
    }
  }

  const handleSuggestionClick = (suggestion:number) => {
    navigate(`/character/${suggestion}`)
    setIsSuggestionSelected(true)
  }

  const handleInputClick = useCallback(() => {
    if (debouncedValue.length > 2) {
      dispatch({ type: 'search/setSuggestions', payload: debouncedValue })
    }
  }, [debouncedValue, dispatch])

  return { suggestions, handleSearch, handleSuggestionClick, handleInputClick }
}
