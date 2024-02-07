// import { useCallback, useContext, useEffect, useRef, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// import { ThemeContext } from '../../contexts/ThemeContext'
// import useDebounce from '../../features/search/hooks/useDebounce'
// import { useAppDispatch, useAppSelector } from '../../store/hooks'
// import { addSearch } from '../../store/searchHistorySlice'

// import './style.css'

// export const SearchPanel = () => {
//   const [isSuggestionSelected, setIsSuggestionSelected] = useState(false)
//   const [inputValue, setInputValue] = useState('')

//   const suggestionBlockRef = useRef<HTMLDivElement | null>(null)

//   const { theme } = useContext(ThemeContext)

//   const debouncedValue = useDebounce(inputValue, 500)
//   const suggestions = useAppSelector((state) => state.search.suggestions)

//   const navigate = useNavigate()
//   const dispatch = useAppDispatch()

//   useEffect(() => {
//     if (debouncedValue.length > 2 && !isSuggestionSelected) {
//       dispatch({ type: 'search/setSuggestions', payload: debouncedValue })
//     } else {
//       dispatch({ type: 'search/clearSuggestions' })
//       setIsSuggestionSelected(false)
//     }
//   }, [debouncedValue, dispatch, isSuggestionSelected])

//   const handleClickOutside = useCallback(
//     (event: MouseEvent) => {
//       if (suggestionBlockRef.current && !suggestionBlockRef.current.contains(event.target as Node)) {
//         dispatch({ type: 'search/clearSuggestions' })
//       }
//     },
//     [dispatch]
//   )

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside)
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [handleClickOutside])

//   const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === 'Enter') {
//       handleSearch()
//     }
//   }

//   const handleSearch = () => {
//     if (inputValue) {
//       navigate(`/search/${encodeURIComponent(inputValue)}`)
//     }
//     dispatch(addSearch(inputValue))
//   }

//   return (
//     <div className={`SearchPanel ${theme}`}>
//       <input
//         type='text'
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         onKeyDown={handleKeyPress}
//         placeholder='Enter search query'
//         className='search-input'
//       />
//       <button onClick={handleSearch} className='search-button'>
//         Search
//       </button>
//       <div ref={suggestionBlockRef} className='suggestion-block'>
//         {Array.isArray(suggestions) &&
//           suggestions.map((suggestion, index) => (
//             <div
//               key={index}
//               className='suggestion'
//               onClick={() => {
//                 setInputValue(suggestion)
//                 setIsSuggestionSelected(true)
//                 dispatch({ type: 'search/clearSuggestions' })
//               }}
//             >
//               {suggestion}
//             </div>
//           ))}
//       </div>
//     </div>
//   )
// }
