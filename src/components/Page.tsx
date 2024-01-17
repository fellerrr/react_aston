import { Link } from 'react-router-dom'

export default function Page() {
  return (
    <Link to='/'>
      <div>
        <h1 style={{ color: 'red' }}>Page</h1>
      </div>
    </Link>
  )
}
