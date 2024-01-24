import { useState } from 'react'

import { Head } from '../components/head'
import { List } from '../components/list'
import PageLayout from '../components/page-layout'
import { CharactersContext } from '../store/CharactersContext'
import { ItemsProps } from '../store/itemSlice'

function HomePage() {
  const title = 'HomePage'
  const [characters, setCharacters] = useState<ItemsProps | null>(null)
  return (
    <PageLayout>
      <CharactersContext.Provider value={{ characters, setCharacters }}>
        <Head title={title} />
        <List />
      </CharactersContext.Provider>
    </PageLayout>
  )
}

export default HomePage
