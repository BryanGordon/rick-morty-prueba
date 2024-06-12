import { RickMortyLocations, type RickMortyCharacters } from '../types/api'

export function UseData () {
  const getCharacters = async () => {
    return await fetch('https://rickandmortyapi.com/api/character/?page=1')
      .then(async res => {
        return (await res.json()) as RickMortyCharacters
      })
      .then(res => {
        return {
          characters: res.results
        }
      })
  }

  const getLocations = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/location')
    const { results: location } = (await res.json()) as RickMortyLocations
    return location
  }
  return { getCharacters, getLocations }
}
