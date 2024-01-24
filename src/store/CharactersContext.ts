import React, { createContext } from 'react'

import { ItemsProps } from './itemSlice'

type CharactersContextType = {
  characters: ItemsProps | null
  setCharacters: React.Dispatch<React.SetStateAction<ItemsProps | null>>
}

export const CharactersContext = createContext<CharactersContextType>({
  characters: null,
  setCharacters: () => null
})
