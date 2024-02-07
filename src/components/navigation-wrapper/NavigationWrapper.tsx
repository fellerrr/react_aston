import { useEffect } from 'react'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

import { getCurrentUser } from '../../entities/user/model'


interface Props {
  children: ReactNode
}

export const NavigationWrapper = ({ children }: Props) => {
  const navigate = useNavigate()
  const user = getCurrentUser()

  useEffect(() => {
    if (!user) {
      navigate('/registration')
    }
  }, [user, navigate])

  return children
}
