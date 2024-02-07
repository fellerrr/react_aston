import { useState } from 'react'

import { ThemeContext } from '../../contexts/ThemeContext'
import { getCurrentUser } from '../../entities/user/model'
import { Controls } from '../controls/Controls'
// import { SearchPanel } from '../search-panel/SearchPanel'
import { SearchPanel } from '../../features/search/components/search-panel/SearchPanel'
import { UserInfo } from '../user-menu/UserMenu'

import './style.css'


interface HeadProps {
  title: string
}

export function Head({ title }: HeadProps) {
  const [userName, setUserName] = useState(getCurrentUser())
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`Head ${theme}`}>
        <div className='controls'>
          <h1>{title}</h1>
          <div className='hChange'>
            {userName ? <UserInfo email={userName} setUser={setUserName} /> : <Controls />}
            <button onClick={toggleTheme}>change theme</button>
          </div>
        </div>
        <SearchPanel />
      </div>
    </ThemeContext.Provider>
  )
}
