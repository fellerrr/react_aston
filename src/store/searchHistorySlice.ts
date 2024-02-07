import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { getCurrentUser } from '../entities/user/model'

import { dataHandler } from '../utils/dataHandler'

type SearchHistoryItem = string

const getInitialSearchHistory = (): SearchHistoryItem[] => {
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
    }
  }
})

export const { addSearch, clearStateSearchHistory } = searchHistorySlice.actions

export default searchHistorySlice.reducer
