import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { getCurrentUser } from '../entities/user/model'

import { dataHandler } from '../utils/dataHandler'

type SearchHistoryItem = string

export const getInitialSearchHistory = (): SearchHistoryItem[] => {
  const user = getCurrentUser()
  return user ? dataHandler.get(`searchHistory-${user}`) || [] : []
}

const searchHistorySlice = createSlice({
  name: 'searchHistory',
  initialState: getInitialSearchHistory(),
  reducers: {
    addSearch: (state, action: PayloadAction<SearchHistoryItem>) => {
      const user = getCurrentUser()
      if (user) {
        if (!state.includes(action.payload)) {
          state.unshift(action.payload)
          dataHandler.set(`searchHistory-${user}`, state)
        }
      }
    },
    clearStateSearchHistory: () => {
      return []
    },
    reloadStateSearchHistory: (state) => {
      const user = getCurrentUser()
      if (user) {
        const newHistory = dataHandler.get(`searchHistory-${user}`) as SearchHistoryItem[];
        state.splice(0, state.length, ...newHistory)
      }
    }
  }
})

export const { addSearch, clearStateSearchHistory, reloadStateSearchHistory } = searchHistorySlice.actions

export default searchHistorySlice.reducer
