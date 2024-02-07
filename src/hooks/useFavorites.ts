// hooks/useFavorites.ts
import { useEffect, useState } from 'react'

import { getItems } from '../utils/storage'

import type { ItemProps } from '../store/itemsSlice'

export const useFavorites = (user: string | null, isDelete: boolean): ItemProps[] => {
  const [favorites, setFavorites] = useState<ItemProps[]>([])

  useEffect(() => {
    if (user) {
      const storedFavorites = getItems(user)
      setFavorites(storedFavorites)
    }
  }, [user, isDelete])

  return favorites
}
