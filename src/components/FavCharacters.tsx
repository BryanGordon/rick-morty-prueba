import { useValidate } from '../hook/useValidate'
import { Hearth } from '../icons/Hearth'
import { Characters } from '../types/api'

interface Props {
  character: Characters
}

export function FavCharacters (characters: Props) {
  const { contextCharacters } = useValidate()

  const handleDeleteFavCharacters = (id: number) => {
    contextCharacters?.setFavs(contextCharacters?.favs.filter((fav) => fav.id !== id))
  }

  return (
    <article className='player-card'>

      <picture>
        <img src={characters.character.image} alt={characters.character.name} />
      </picture>
      <h4>{characters.character.name}</h4>

      <div className='pers-info-container'>
        <h5>Especie: </h5>
        <span>{characters.character.species}</span>
        <h5>Status: </h5>
        <span className='status-field'>{characters.character.status}</span>
        <h5>Genero: </h5>
        <span className='gender-field'>{characters.character.gender}</span>

        <button className='delete-button' onClick={() => handleDeleteFavCharacters(characters.character.id)}>
          Eliminar
          <Hearth />
        </button>
      </div>

    </article>
  )
}
