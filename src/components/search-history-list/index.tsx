import { Link } from 'react-router-dom'

import './style.css'

type SearchHistoryListProps = {
  searchHistory: string[]
}

export const SearchHistoryList: React.FC<SearchHistoryListProps> = ({ searchHistory }) => {
  return (
    <div>
      {searchHistory.length > 0 ? (
        <ul>
          {searchHistory.map((query, index) => (
            <li key={index}>
              <Link to={`/search/${encodeURIComponent(query)}`}>{query}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>History is empty</p>
      )}
    </div>
  )
}
