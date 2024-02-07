import type { ItemProps } from '../store/itemsSlice'

export const getItems = (user: string): ItemProps[] => {
  const items = localStorage.getItem(`favorites-${user}`)
  return items ? JSON.parse(items) : []
}

export const setItems = (user: string, items: ItemProps[]): void => {
  localStorage.setItem(`favorites-${user}`, JSON.stringify(items))
}
