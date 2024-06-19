import { type RickMortyLocations, type RickMortyCharacters } from '../types/api'

export function UseData () {
  const getCharacters = async (page: number) => {
    return await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(async res => {
        return (await res.json()) as RickMortyCharacters
      })
      .then(res => res.results)
  }

  const getLocations = async (page: number) => {
    return await fetch(`https://rickandmortyapi.com/api/location/?page=${page}`)
      .then(async res => {
        return (await res.json()) as RickMortyLocations
      })
      .then(res => res.results)
  }
  return { getCharacters, getLocations }
}
