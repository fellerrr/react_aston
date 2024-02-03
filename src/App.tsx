import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { LoginForm } from './features/login'
import { RegistrationForm } from './features/registration'
import { FavoritesPage } from './pages/favorites'
import HomePage from './pages/home'
import { login } from './store/authSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const email = localStorage.getItem('email')
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

    if (email && isLoggedIn) {
      dispatch(login({ email }))
    }
  }, [dispatch])
  return (
    <Router basename='/react_aston/'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/registration' element={<RegistrationForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </Router>
  )
}

export default App
