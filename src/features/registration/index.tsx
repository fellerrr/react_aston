import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import PageLayout from '../../components/page-layout'
import { login } from '../../store/authSlice'
import './style.css'

type FormData = {
  email: string
  password: string
}

export const RegistrationForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = handleSubmit(({ email, password }) => {
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    dispatch(login({ email }))
    navigate('/')
  })

  return (
    <PageLayout>
      <div className='container-form'>
        <form className='registration-form' onSubmit={onSubmit}>
          <span>REGISTRATION</span>
          <label>
            Email:
            <input
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid e-mail address'
                }
              })}
            />
          </label>
          {errors.email && <p className='error-message'>{errors.email.message}</p>}
          <label>
            Password:
            <input
              type='password'
              {...register('password', {
                required: 'This field is required',
                minLength: { value: 8, message: 'The password must contain at least 8 characters' }
              })}
            />
          </label>
          {errors.password && <p className='error-message'>{errors.password.message}</p>}
          <button type='submit' className='submit-button'>
            Sign up
          </button>
        </form>
      </div>
    </PageLayout>
  )
}
