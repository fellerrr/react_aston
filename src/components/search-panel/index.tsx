import { useState } from 'react'

import './style.css'

export const SearchPanel = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    // eslint-disable-next-line no-console
    console.log(searchTerm)
  }

  return (
    <div className='search-panel'>
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Enter search query'
        className='search-input'
      />
      <button onClick={handleSearch} className='search-button'>
        Search
      </button>
    </div>
  )
}
