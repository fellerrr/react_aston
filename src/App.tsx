import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { LoginForm } from './features/login'
import { RegistrationForm } from './features/registration'
import { FavoritesPage } from './pages/favorites'
import HomePage from './pages/home'
import { ResultSearchHistory } from './pages/resultSearchHistory'
import { SearchHistoryPage } from './pages/searchHistory'
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
        <Route path='/search-history' element={<SearchHistoryPage />} />
        <Route path='/search/:query' element={<ResultSearchHistory />} />
      </Routes>
    </Router>
  )
}

export default App
