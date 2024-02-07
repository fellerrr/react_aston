import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
  name: 'isDelete',
  initialState: {
    isDelete: false
  },
  reducers: {
    deleteFavorites(state) {
      state.isDelete = !state.isDelete
    }
  }
})

export const { deleteFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer
