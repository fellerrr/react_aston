import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Page from './components/Page'

function App() {
  return (
    <Router basename='/react_aston/'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/page' element={<Page />} />
      </Routes>
    </Router>
  )
}

function HomePage() {
  const title = 'HomePage'
  return (
    <Link to='/page'>
      <h1>{title}</h1>
    </Link>
  )
}

export default App
