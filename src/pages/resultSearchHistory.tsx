import { useParams } from 'react-router-dom'

import { Head } from '../components/head/Head'
import { List } from '../components/list/List'
import PageLayout from '../components/page-layout/PageLayout'
import { useGetCharactersQuery } from '../store/query'

const ResultSearchHistory = () => {
  const query = useParams().query
  const { data, isFetching, isError } = useGetCharactersQuery(query)
  const listHistory = data?.results
  
  return (
    <PageLayout>
      <Head title={`"${query}"`} />
      {isFetching && <div style={{ padding: '40px' }}>Loading...</div>}
      {isError && <div style={{ padding: '40px' }}>No data</div>}
      {listHistory && <List listCustom={listHistory} />}
    </PageLayout>
  )
}
export default ResultSearchHistory
