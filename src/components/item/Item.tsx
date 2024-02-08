import { useEffect, useState } from 'react'

import { isItemInFavorites, updateFavorites } from '../../model/favorites'

import { deleteFavorites } from '../../store/favoritesSlice'

import { useAppDispatch } from '../../store/hooks'

import type { Item } from '../../model/favorites'

import './style.css'

interface ItemProps {
  item: Item
  userEmail: string | null
}

export function Item({ item, userEmail }: ItemProps) {
  const type = item.type || 'No'
  const id = item.id
  const [inFavorite, setInFavorite] = useState<boolean>(() => {
    return userEmail ? isItemInFavorites(id, userEmail) : false
  })
  const dispatch = useAppDispatch()

  const handleFavorite = (event: React.MouseEvent) => {
    event.preventDefault()

    if (userEmail) {
      setInFavorite((prevState) => !prevState)
    }
  }

  useEffect(() => {
    if (userEmail) {
      updateFavorites(item, inFavorite, userEmail)
      dispatch(deleteFavorites())
    }
  }, [inFavorite, item, id, userEmail,dispatch])

  return (
    <div className='Item'>
      <img className='Item-image' src={item.image} alt={item.name} />
      <div>
        <div className='Item-text'>Name: {item.name}</div>
        <div className='Item-text'>Status: {item.status}</div>
        <div className='Item-text'>Species: {item.species}</div>
        <div className='Item-text'>Type: {type}</div>
        <div className='Item-text'>Gender: {item.gender}</div>
        {userEmail && (
          <div className='favorite' onClick={handleFavorite}>
            {inFavorite ? 'delete' : 'add to favorites'}
          </div>
        )}
      </div>
    </div>
  )
}
