import { useContext, useState } from 'react'

import useDebounce from '../../hooks/useDebounce'
import { CharactersContext } from '../../store/CharactersContext'
import { useGetCharactersQuery } from '../../store/query'
import './style.css'

export const SearchPanel = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 300)
  const { setCharacters } = useContext(CharactersContext)

  const { data } = useGetCharactersQuery(debouncedSearchTerm)

  const handleSearch = () => {
    setCharacters(data)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className='search-panel'>
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
