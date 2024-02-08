import './style.css'
import { Link } from 'react-router-dom'

export const Controls = () => {
  return (
    <div className='controls'>
      <div className='buttons'>
        <Link to='/' className='button'>Home</Link>
        <Link to='/login' className='button'>
          Sign in
        </Link>
        <Link to='/registration' className='button'>
          Sign up
        </Link>
      </div>
    </div>
  )
}
