import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import PageLayout from '../../components/page-layout'
import { login } from '../../store/authSlice'
import './style.css'

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const storedEmail = localStorage.getItem('email')
    const storedPassword = localStorage.getItem('password')

    if (email === storedEmail && password === storedPassword) {
      dispatch(login({ email }))
      navigate('/')
    } else {
      setError('Invalid email address or password')
    }
  }

  return (
    <PageLayout>
      <div className='container-form'>
        <form className='login-form' onSubmit={handleSubmit}>
          <h3>Log In</h3>
          <label>
            Email:
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Password:
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          {error && <p className='error-message'>{error}</p>}
          <button type='submit' className='submit-button'>
            Login
          </button>
        </form>
      </div>
    </PageLayout>
  )
}
