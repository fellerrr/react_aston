import { useSelector } from 'react-redux'

import { Head } from '../components/head/Head'
import { NavigationWrapper } from '../components/navigation-wrapper/NavigationWrapper'
import PageLayout from '../components/page-layout/PageLayout'
import { SearchHistoryList } from '../components/search-history-list/SearchHistoryList'

type SearchHistoryItem = string

const SearchHistoryPage = () => {
  const searchHistory = useSelector((state: { searchHistory: SearchHistoryItem[] }) => state.searchHistory)

  return (
    <NavigationWrapper>
      <PageLayout>
        <Head title='Search History' />
        <SearchHistoryList searchHistory={searchHistory} />
      </PageLayout>
    </NavigationWrapper>
  )
}

export default SearchHistoryPage
