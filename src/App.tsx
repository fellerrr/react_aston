import { useEffect } from 'react'

import { useDispatch } from 'react-redux';

import { login } from './store/authSlice'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import HomePage from './pages/home'
import {RegistrationForm} from './features/registration'
import {LoginForm} from './features/login'
import {FavoritesPage} from './pages/favorites'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const email = localStorage.getItem('email');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (email && isLoggedIn) {
      dispatch(login({ email }));
    }
  }, [dispatch]);
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
