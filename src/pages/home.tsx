import { useState } from 'react'

import { Head } from '../components/head'
import { List } from '../components/list'
import PageLayout from '../components/page-layout'
import { SearchText } from '../store/SearchContext'

function HomePage() {
  const title = 'HomePage'
  const [searchText, setSearchText] = useState<string>('')
  return (
    <PageLayout>
      <SearchText.Provider value={{ searchText, setSearchText }}>
        <Head title={title} homePage={true} />
        <List />
      </SearchText.Provider>
    </PageLayout>
  )
}

export default HomePage
