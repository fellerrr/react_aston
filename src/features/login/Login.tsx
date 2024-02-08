import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Head } from '../../components/head/Head'
import PageLayout from '../../components/page-layout/PageLayout'
import { login } from '../../store/authSlice'
import { reloadStateSearchHistory } from '../../store/searchHistorySlice' 
import { dataHandler } from '../../utils/dataHandler'

import './style.css'

type Props = {
  email: string
  password: string
}

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const storedUserJson: Props | null = dataHandler.get(email)

    if (storedUserJson) {
      if (password === storedUserJson.password) {
        dispatch(login({ email }))
        dispatch(reloadStateSearchHistory())
        navigate('/')
      } else {
        setError('Invalid password')
      }
    } else {
      setError('Invalid email address')
    }
  }

  return (
    <PageLayout>
      <Head title='Login' />
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

export default LoginForm
