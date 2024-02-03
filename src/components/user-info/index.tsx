import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { logout } from '../../store/authSlice'
import './style.css'

type UserInfoProps = {
  email: string
}

export const UserInfo = ({ email }: UserInfoProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userLogout = () => {
    dispatch(logout())
    navigate('/')
  }
  return (
    <div className='user-info'>
      <Link to='/'>Home</Link>
      <span>History</span>
      <Link to='/favorites'>Favorites</Link>
      <div className='user-info__name'>{email}</div>
      <button onClick={userLogout}>Sign out</button>
    </div>
  )
}
