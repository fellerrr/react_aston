import { useState, useMemo } from 'react'

import { ThemeContext } from '../../contexts/ThemeContext'
import { getCurrentUser } from '../../entities/user/model'
import { Controls } from '../controls/Controls'

import { SearchPanel } from '../../features/search/components/search-panel/SearchPanel'
import { UserMenu } from '../user-menu/UserMenu'

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

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return (
    <ThemeContext.Provider value={value}>
      <div className={`Head ${theme}`}>
        <div className='controls'>
          <h1>{title}</h1>
          <div className='hChange'>
            {userName ? <UserMenu email={userName} setUser={setUserName} /> : <Controls />}
            <button onClick={toggleTheme}>change theme</button>
          </div>
        </div>
        <SearchPanel />
      </div>
    </ThemeContext.Provider>
  )
}
