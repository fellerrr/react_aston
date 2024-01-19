import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchItems } from '../../store/itemSlice'
import { Item } from '../item'
import './style.css'

export function List() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch])
  const { items, status, error } = useAppSelector((state) => state.items)

  const list = items.results
  if (status === 'loading') {
    return <h2>Loading...</h2>
  }
  if (status === 'failed') {
    return <h2>{error}</h2>
  }
  if (status === 'succeeded') {
    return (
      <div className='List'>
        {list.map((item) => (
          <div className='List-item' key={item.id}>
            <Item item={item} />
          </div>
        ))}
      </div>
    )
  }
}
