import { Head } from '../components/head'
import { List } from '../components/list'
import PageLayout from '../components/page-layout'

function HomePage() {
  const title = 'HomePage'
  return (
    <PageLayout>
      <Head title={title} />
      <List />
    </PageLayout>
  )
}

export default HomePage
