import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface ItemProps {
  id: number
  name: string
  image: string
  status: string
  species: string
  type: string
  gender: string
}
export interface ItemsProps {
  results: ItemProps[]
}

export interface ItemState {
  items: ItemsProps
  status: string
  error: string | undefined
}

const initialState: ItemState = {
  items: { results: [] },
  status: '',
  error: ''
}

export const fetchItems = createAsyncThunk('items/fetchItems', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    if (!response.ok) {
      throw new Error('Server Error')
    }
    const data = await response.json()
    return data
  } catch (err) {
    return rejectWithValue(err)
  }
})

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = 'loading'
        state.error = ''
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default itemSlice.reducer
