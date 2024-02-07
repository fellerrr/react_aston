import { useContext, useState } from 'react'

import { ThemeContext } from '../../../../contexts/ThemeContext'
import useDebounce from '../../hooks/useDebounce'
import { useSearch } from '../../hooks/useSearch'
import { Suggestions } from '../suggestions/Suggestions'

import './style.css'

export const SearchPanel = () => {
  const [inputValue, setInputValue] = useState('')
  const debouncedValue = useDebounce(inputValue, 500)

  const { theme } = useContext(ThemeContext)

  const { suggestions, handleSearch, handleSuggestionClick, handleInputClick } = useSearch(debouncedValue, inputValue)

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className={`SearchPanel ${theme}`}>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onClick={handleInputClick}
        onKeyDown={handleKeyPress}
        placeholder='Enter search query'
        className='search-input'
      />
      <button onClick={handleSearch} className='search-button'>
        Search
      </button>

      <Suggestions suggestions={suggestions} onSuggestionClick={handleSuggestionClick} />
    </div>
  )
}
