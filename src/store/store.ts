import { configureStore } from '@reduxjs/toolkit'

import itemsReducer from './itemSlice'
import { rickAndMortyApi } from './query'

export const store = configureStore({
  reducer: {
    items: itemsReducer,

    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
