import { RickMortyCharacters, type Characters } from '../types/api'

export function UseData () {

  const getCharacters = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const { results: character } = (await res.json()) as RickMortyCharacters
    console.log("api    " + character)
    return character
  }

  return { getCharacters }
}
