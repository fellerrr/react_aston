import { Head } from '../components/head/Head'
import { List } from '../components/list/List'
import { NavigationWrapper } from '../components/navigation-wrapper/NavigationWrapper'
import PageLayout from '../components/page-layout/PageLayout'
import { getCurrentUser } from '../entities/user/model'
import { useFavorites } from '../hooks/useFavorites'
import { useAppSelector } from '../store/hooks'

const FavoritesPage = () => {
  const user = getCurrentUser()
  const isDelete = useAppSelector((state) => state.isDelete.isDelete)

  const favorites = useFavorites(user, isDelete)

  return (
    <NavigationWrapper>
      <PageLayout>
        <Head title='Favorites' />
        {favorites.length === 0 ? (
          <div style={{ padding: '40px' }}>Favorites is empty</div>
        ) : (
          <List listCustom={favorites} />
        )}
      </PageLayout>
    </NavigationWrapper>
  )
}

export default FavoritesPage
