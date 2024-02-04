import { useSelector } from 'react-redux'

import { Head } from '../components/head'
import PageLayout from '../components/page-layout'
import { SearchHistoryList } from '../components/search-history-list'

type SearchHistoryItem = string

export const SearchHistoryPage = () => {
  const searchHistory = useSelector((state: { searchHistory: SearchHistoryItem[] }) => state.searchHistory)

  return (
    <PageLayout>
      <Head title='Search History' />
      <SearchHistoryList searchHistory={searchHistory} />
    </PageLayout>
  )
}
