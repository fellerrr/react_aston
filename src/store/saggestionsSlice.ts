import { createSlice } from '@reduxjs/toolkit'

export type Suggestion = {
  id: number
  name: string
}

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    suggestions: [] as Suggestion[],
    status: 'idle',
    error: null
  },
  reducers: {
    setSuggestions: (state, action) => {
      state.suggestions = action.payload
    },
    clearSuggestions: (state) => {
      state.suggestions = []
    }
  }
})

export const { setSuggestions, clearSuggestions } = searchSlice.actions

export default searchSlice.reducer
