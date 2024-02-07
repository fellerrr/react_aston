import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { logout } from '../../store/authSlice'
import { clearStateSearchHistory } from '../../store/searchHistorySlice'

import './style.css'


type UserInfoProps = {
  email: string
  setUser: (user: string) => void
}

export const UserInfo = ({ email, setUser }: UserInfoProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userLogout = () => {
    dispatch(logout())
    dispatch(clearStateSearchHistory())
    setUser('')
    navigate('/')
  }
  return (
    <div className='user-info'>
      <Link to='/'>Home</Link>
      <Link to='/search-history'>Search history</Link>
      <Link to='/favorites'>Favorites</Link>
      <div className='user-info__name'>{email}</div>
      <button onClick={userLogout}>Sign out</button>
    </div>
  )
}
