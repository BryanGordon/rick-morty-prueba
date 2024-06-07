import { RickMortyLocations, type RickMortyCharacters } from '../types/api'

export function UseData () {
  const getCharacters = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const { results: character } = (await res.json()) as RickMortyCharacters
    return character
  }

  const getLocations = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/location')
    const { results: location } = (await res.json()) as RickMortyLocations
    return location
  }

  return { getCharacters, getLocations }
}
