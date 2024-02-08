import { Suspense, lazy } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const LoginForm = lazy(() => import('./features/login/Login'))
const RegistrationForm = lazy(() => import('./features/registration/Registration'))
const FavoritesPage = lazy(() => import('./pages/favorites'))
const HomePage = lazy(() => import('./pages/home'))
const ResultSearchHistory = lazy(() => import('./pages/resultSearchHistory'))
const SearchHistoryPage = lazy(() => import('./pages/searchHistory'))
const CharacterDetail = lazy(() => import('./pages/itemPage'))

function App() {
  return (
    <Router basename='/react_aston/'>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/registration' element={<RegistrationForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/search-history' element={<SearchHistoryPage />} />
          <Route path='/search/:query' element={<ResultSearchHistory />} />
          <Route path='/character/:id' element={<CharacterDetail />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
