import { useEffect, useState } from 'react'

import { Head } from '../components/head'
import { Item } from '../components/item'
import PageLayout from '../components/page-layout'
import { ItemProps } from '../store/itemSlice'

export const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    setFavorites(storedFavorites)
  }, [])

  return (
    <PageLayout>
      <Head title='Favorites' />
      <div className='List'>
        {favorites.map((item: ItemProps) => (
          <div className='List-item' key={item.id}>
            <Item item={item} />
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
