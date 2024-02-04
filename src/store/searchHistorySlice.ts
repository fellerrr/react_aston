import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type SearchHistoryItem = string

// Получение истории поиска из localStorage при инициализации
const initialSearchHistory: SearchHistoryItem[] = JSON.parse(localStorage.getItem('searchHistory') || '[]')

const searchHistorySlice = createSlice({
  name: 'searchHistory',
  initialState: initialSearchHistory,
  reducers: {
    addSearch: (state, action: PayloadAction<SearchHistoryItem>) => {
      state.unshift(action.payload)
      // Сохранение истории поиска в localStorage после каждого добавления
      localStorage.setItem('searchHistory', JSON.stringify(state))
    }
  }
})

export const { addSearch } = searchHistorySlice.actions

export default searchHistorySlice.reducer
