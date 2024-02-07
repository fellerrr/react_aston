import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getCurrentUser } from '../../entities/user/model'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchItems } from '../../store/itemsSlice'

import { Item } from '../item/Item'

import type { ItemProps } from '../../store/itemsSlice'

import './style.css'


type ListProps = {
  listCustom?: ItemProps[]
}

export const List = ({ listCustom }: ListProps) => {
  const dispatch = useAppDispatch()

  const userEmail = getCurrentUser()

  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch, listCustom])

  const { items, status } = useAppSelector((state) => state.items)

  const list = listCustom || items.results

  if (status === 'loading') {
    return <h2 style={{ paddingLeft: '20px' }}>Loading...</h2>
  }

  if (status === 'failed') {
    return <h2 style={{ paddingLeft: '20px' }}>No data</h2>
  }

  if (status === 'succeeded') {
    return (
      <div className='List'>
        {list.map((item: ItemProps) => (
          <div className='List-item' key={item.id}>
            <Link to={`/character/${item.id}`}>
              <Item item={item} userEmail={userEmail} />
            </Link>
          </div>
        ))}
      </div>
    )
  }
}
