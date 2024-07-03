import { Star } from "../icons/Star"
import { Characters } from "../types/api"
import { useValidate } from "../hook/useValidate"
import { Error406 } from "./Error406"

interface Props {
  character: Characters
}

export function CharactersCard (characters: Props) {
  const { contextCharacters } = useValidate()

  if (!contextCharacters) return <Error406 />

  const { favs, setFavs } = contextCharacters

  const handleFavorites = (fav: Characters) => {
    const aux = [...favs]
    aux.push(fav)
    setFavs(aux)
  }
  return (
    <article className='player-card'>
      <picture>
        <img src={characters.character.image} alt={characters.character.name} />
      </picture>
      <h4>
        {characters.character.name}
        <span id='icon-star' onClick={() => handleFavorites(characters.character)}>
          <Star />
        </span>
      </h4>
      <div className='pers-info-container'>
        <h5>Especie: </h5>
        <span>{characters.character.species}</span>
        <h5>Status: </h5>
        <span>{characters.character.status}</span>
        <h5>Genero: </h5>
        <span>{characters.character.gender}</span>
      </div>
    </article>
  )
}
