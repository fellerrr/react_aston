import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import HomePage from './pages/home'

function App() {
  return (
    <Router basename='/react_aston/'>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
