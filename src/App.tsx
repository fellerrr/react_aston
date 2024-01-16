import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  )
}

function HomePage() {
  const title = 'HomePage'
  return <h1>{title}</h1>
}

export default App
