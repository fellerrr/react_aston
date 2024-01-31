import { Link } from 'react-router-dom'

import './style.css'

export const Controls = () => {
  return (
    <div className='controls'>
      <div className='buttons'>
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
