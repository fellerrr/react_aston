import { useRef, useCallback, useEffect } from 'react'

import { useAppDispatch } from '../../../../store/hooks'

import type { Suggestion } from '../../../../store/saggestionsSlice'

import './style.css'

interface Props {
  suggestions: Suggestion[]
  onSuggestionClick: (suggestion:number) => void
}

export const Suggestions: React.FC<Props> = ({ suggestions, onSuggestionClick }) => {
  const suggestionBlockRef = useRef<HTMLDivElement | null>(null)

  const dispatch = useAppDispatch()

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (suggestionBlockRef.current && !suggestionBlockRef.current.contains(event.target as Node)) {
        dispatch({ type: 'search/clearSuggestions' })
      }
    },
    [dispatch]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  return (
    <div ref={suggestionBlockRef} className='suggestion-block'>
      {Array.isArray(suggestions) &&
        suggestions.map((suggestion, index) => (
          <div
            key={index}
            className='suggestion'
            onClick={() => onSuggestionClick(suggestion.id)}
          >
            {suggestion.name}
          </div>
        ))}
    </div>
  )
}
