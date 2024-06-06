export type Characters = {
  id: number | null
  name: string
  status: string | null
  species: string | null
  gender: string | null
  image: string
}

export type Locations = {
  id: number
  name: string
  type: string
  dimesion: string
}

const req = await fetch('https://rickandmortyapi.com/api/character')
const character = await req.json()

export const res = character.results
console.log('res-api   ' + res)

export const GetLocations = async () => {
  const req = fetch('https://rickandmortyapi.com/api/location')
  const location = (await req).json()

  return location
}
