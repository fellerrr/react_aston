import { configureStore } from '@reduxjs/toolkit'

import { listenerMiddleware } from '../shared/middlewares/sadjests'

import authReducer from './authSlice'
import favoritesReducer from './favoritesSlice'
import itemsReducer from './itemsSlice'
import { rickAndMortyApi } from './query'
import searchReducer from './saggestionsSlice'
import searchHistoryReducer from './searchHistorySlice'

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    auth: authReducer,
    searchHistory: searchHistoryReducer,
    search: searchReducer,
    isDelete: favoritesReducer,

    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware).concat(listenerMiddleware.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
