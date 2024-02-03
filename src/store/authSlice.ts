import { createSlice } from '@reduxjs/toolkit'

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
      localStorage.setItem('isLoggedIn', 'true')
    },
    logout(state) {
      state.isLoggedIn = false
      state.email = ''
      localStorage.removeItem('isLoggedIn')
    }
  }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
