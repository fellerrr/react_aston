import { SearchPanel } from '../search-panel'
import './style.css'

interface HeadProps {
  title: string
}

export function Head({ title }: HeadProps) {
  return (
    <div className='Head'>
      <h1>{title}</h1>
      <SearchPanel />
    </div>
  )
}
