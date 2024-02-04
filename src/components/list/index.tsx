import { useContext, useEffect } from 'react'

import { SearchText } from '../../store/SearchContext'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchItems } from '../../store/itemSlice'
import { useGetCharactersQuery } from '../../store/query'
import { addSearch } from '../../store/searchHistorySlice'
import { Item } from '../item'

import type { ItemProps } from '../../store/itemSlice'

import './style.css'

type ListProps = {
  listHistory?: ItemProps[]
}

export const List = ({ listHistory }: ListProps) => {
  const { searchText } = useContext(SearchText)
  const dispatch = useAppDispatch()

  const { data, isFetching, error: searchError } = useGetCharactersQuery(searchText)

  useEffect(() => {
    if (searchText) {
      dispatch(addSearch(searchText))
    }
    dispatch(fetchItems())
  }, [dispatch, searchText])

  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch])
  const { items, status } = useAppSelector((state) => state.items)

  const list = listHistory || data?.results || items.results

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
