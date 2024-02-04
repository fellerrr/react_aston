import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { SearchText } from '../../store/SearchContext'
import { useGetCharactersQuery } from '../../store/query'
import './style.css'

export const SearchPanel = () => {
  const [inputValue, setInputValue] = useState('')
  const { searchText, setSearchText } = useContext(SearchText)

  const navigate = useNavigate()

  useGetCharactersQuery(searchText)

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  const handleSearch = () => {
    setSearchText(inputValue)
    navigate('/')
  }

  return (
    <div className='search-panel'>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder='Enter search query'
        className='search-input'
      />
      <button onClick={handleSearch} className='search-button'>
        Search
      </button>
    </div>
  )
}
