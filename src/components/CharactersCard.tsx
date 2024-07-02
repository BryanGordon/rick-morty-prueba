import { Star } from "../icons/Star"
import { Characters } from "../types/api"

interface Props {
  character: Characters
}

export function CharactersCard (characters: Props) {
  return (
    <article key={characters.character.id} className='player-card'>
      <picture>
        <img src={characters.character.image} alt={characters.character.name} />
      </picture>
      <h4>
        {characters.character.name}
        <span id='icon-star' onClick={() => handleFavorites(characters)}>
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
