import { configureStore } from '@reduxjs/toolkit'

import authReducer from './authSlice'
import itemsReducer from './itemSlice'
import { rickAndMortyApi } from './query'
import searchHistoryReducer from './searchHistorySlice'

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    auth: authReducer,
    searchHistory: searchHistoryReducer,

    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
