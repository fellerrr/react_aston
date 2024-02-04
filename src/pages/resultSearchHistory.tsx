import { useParams } from 'react-router-dom'

import { Head } from '../components/head'
import { List } from '../components/list'
import PageLayout from '../components/page-layout'
import { useGetCharactersQuery } from '../store/query'

export const ResultSearchHistory = () => {
  const query = useParams().query
  const { data } = useGetCharactersQuery(query)
  const listHistory = data?.results
  return (
    <PageLayout>
      <Head title={`Results for the query "${query}"`} />
      <List listHistory={listHistory} />
    </PageLayout>
  )
}
