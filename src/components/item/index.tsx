import './style.css'
import { useState, useEffect } from 'react'

export interface ItemProps {
  item: {
    id: number
    name: string
    image: string
    status: string
    species: string
    type: string
    gender: string
  }
}

export function Item(props: ItemProps) {
  const type = props.item.type || 'No'

  const [inFavorite, setInFavorite] = useState<boolean>(() => {
    return isItemInFavorites(props.item.id);
  });

  useEffect(() => {
    let favorites = getFavorites();
    if (inFavorite) {
      if (!isItemInFavorites(props.item.id)) {
        favorites.push(props.item);
      }
    } else {
      favorites = favorites.filter((item: ItemProps['item']) => item.id !== props.item.id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [inFavorite]);

  const handleFavorite = () => {
    setInFavorite(prevState => !prevState);
  };
  
  return (
    <div className='Item'>
      <img className='Item-image' src={props.item.image} alt={props.item.name} />
      <div>
        <div className='Item-text'>Name: {props.item.name}</div>
        <div className='Item-text'>Status: {props.item.status}</div>
        <div className='Item-text'>Species: {props.item.species}</div>
        <div className='Item-text'>Type: {type}</div>
        <div className='Item-text'>Gender: {props.item.gender}</div>
        <div className='favorite' onClick={handleFavorite}>
          {inFavorite ? 'delete' : 'add to favorites'}
        </div>
      </div>
    </div>
  )
}

function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
}

function isItemInFavorites(id: number): boolean {
  const favorites = getFavorites();
  return favorites.some((item: ItemProps['item']) => item.id === id);
}