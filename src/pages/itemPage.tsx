import { useParams } from 'react-router-dom'

import { Head } from '../components/head/Head'
import { Item } from '../components/item/Item'
import PageLayout from '../components/page-layout/PageLayout'
import { getCurrentUser } from '../entities/user/model'
import MyErrorBoundary from '../shared/components/ErrorBoundary'
import { useGetCharacterQuery, useGetEpisodeQuery } from '../store/query'

interface Episode {
  id: number
  name: string
}

const CharacterDetail = () => {
  const { id } = useParams()
  const userEmail = getCurrentUser()

  const { data: character, isFetching, error } = useGetCharacterQuery(id)

  const episodeIds = character?.episode?.map((url: string) => url.split('/').pop())

  const { data: episodes, isFetching: isFetchingEpisodes, error: episodesError } = useGetEpisodeQuery(episodeIds)

  if (isFetching || isFetchingEpisodes) {
    return <h2>Loading...</h2>
  }

  if (error || episodesError) {
    return <h2>Ошибка при загрузке данных</h2>
  }

  return (
    <PageLayout>
      <MyErrorBoundary>
        <Head title={character?.name || ''} />
        <div style={{ padding: '40px' }}>
          <Item item={character} userEmail={userEmail} />
        </div>
        <div style={{ paddingLeft: '40px' }}>
          {episodesError ? (
            <h2>No data</h2>
          ) : (
            <>
              <h2>All the episodes in which the {character?.name} starred</h2>
              <ol>{episodes?.map((episode: Episode) => <li key={episode.id}>{episode.name}</li>)}</ol>
            </>
          )}
        </div>
      </MyErrorBoundary>
    </PageLayout>
  )
}

export default CharacterDetail
