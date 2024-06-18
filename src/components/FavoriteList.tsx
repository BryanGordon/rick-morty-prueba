import { Characters } from "../types/api"
import { useContext } from "react"
import { FavsContext } from "../context/FavsContext"

interface Props {
  characters: Characters[]
}

export function FavoriteList () {
  const favs = useContext(FavsContext)
  return (
    <>
      <div className='players-container'>
        {
          favs?.favs.map((character) => (
            <div key={character.id} className='players-container'>
              <article className='player-card'>
                <picture>
                  <img src={character.image} alt={character.name} />
                </picture>
                <h4>{character.name}</h4>
              </article>
            </div>
          ))
        }
      </div>
    </>
  )
}
