import { Head } from '../components/head/Head'
import { List } from '../components/list/List'
import PageLayout from '../components/page-layout/PageLayout'

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
