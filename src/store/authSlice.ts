import { createSlice } from '@reduxjs/toolkit'

import { dataHandler } from '../utils/dataHandler'

const initialState = {
  isLoggedIn: false,
  email: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true
      state.email = action.payload.email
      dataHandler.set('currentUser', state.email)
    },
    logout(state) {
      state.isLoggedIn = false
      state.email = ''
      dataHandler.remove('currentUser')
    }
  }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
