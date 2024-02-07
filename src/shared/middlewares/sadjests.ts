import { createListenerMiddleware } from '@reduxjs/toolkit'

import { setSuggestions } from '../../store/saggestionsSlice'

export interface ItemProps {
  id: number
  name: string
  image: string
  status: string
  species: string
  type: string
  gender: string
}

export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
  actionCreator: setSuggestions,
  effect: async (action, listenerApi) => {
    if (Array.isArray(action.payload)) {
      return
    }
    const query = action.payload
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
    const data = await response.json()
    listenerApi.dispatch(setSuggestions(data.results.map((character: ItemProps) => character)))
  }
})
