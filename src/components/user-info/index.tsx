import { useDispatch } from 'react-redux'
import './style.css'
import { logout } from '../../store/authSlice'
import { Link } from 'react-router-dom'

type UserInfoProps = {
	email: string
}

export const UserInfo = ({ email }: UserInfoProps) => {
	const dispatch = useDispatch()
	return (
		<div className="user-info">
			<Link to="/">Home</Link>
			<span>History</span>
			<Link to="/favorites">Favorites</Link>
			<div className="user-info__name">{email}</div>
			<button onClick={() => dispatch(logout())}>Sign out</button>
		</div>
	)
}