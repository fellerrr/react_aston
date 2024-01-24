import { useContext, useEffect } from 'react'

import { SearchText } from '../../store/SearchContext'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchItems } from '../../store/itemSlice'
import { ItemProps } from '../../store/itemSlice'
import { useGetCharactersQuery } from '../../store/query'
import { Item } from '../item'
import './style.css'

export function List() {
  const { searchText } = useContext(SearchText)
  const dispatch = useAppDispatch()

  const { data, isFetching, error: searchError } = useGetCharactersQuery(searchText)

  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch])
  const { items, status } = useAppSelector((state) => state.items)

  const list = data?.results || items.results

  if (status === 'loading' || isFetching) {
    return <h2 style={{ paddingLeft: '20px' }}>Loading...</h2>
  }

  if (status === 'failed' || searchError) {
    return <h2 style={{ paddingLeft: '20px' }}>Данные не найдены</h2>
  }

  if (status === 'succeeded') {
    return (
      <div className='List'>
        {list.map((item: ItemProps) => (
          <div className='List-item' key={item.id}>
            <Item item={item} />
          </div>
        ))}
      </div>
    )
  }
}
