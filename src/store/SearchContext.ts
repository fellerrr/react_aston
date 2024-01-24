import React, { createContext } from 'react'

type SearchContextType = {
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
}

export const SearchText = createContext<SearchContextType>({
  searchText: '',
  setSearchText: () => null
})
