import { useAppSelector } from '../../store/hooks'
import { Controls } from '../controls'
import { SearchPanel } from '../search-panel'
import { UserInfo } from '../user-info'
import './style.css'

interface HeadProps {
  title: string
  homePage?: boolean
}

export function Head({ title, homePage }: HeadProps) {
  const { isLoggedIn, email } = useAppSelector((state) => state.auth)
  return (
    <div className='Head'>
      <div className='controls'>
        <h1>{title}</h1>
        {isLoggedIn ? <UserInfo email={email} /> : <Controls />}
      </div>
      {homePage && <SearchPanel />}
    </div>
  )
}
