import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Определение сервиса с использованием базового URL и ожидаемых конечных точек
export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  tagTypes: ['Character'],
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (name) => `character/?name=${name}`,
      providesTags: ['Character']
    }),
    getCharacter: builder.query({
      query: (id) => `character/${id}`
    }),
    getEpisode: builder.query({
      query: (id) => (id ? `episode/${id}` : ''),
      transformResponse: (response) => (Array.isArray(response) ? response : [response])
    })
  })
})

// Экспорт хуков для использования в функциональных компонентах
export const { useGetCharactersQuery, useGetCharacterQuery, useGetEpisodeQuery } = rickAndMortyApi
