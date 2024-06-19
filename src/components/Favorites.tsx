import { useContext } from "react"
import { FavsContext } from "../context/FavsContext"
import { Navbar } from "./Navbar"

export function Favorites () {
  const favs = useContext(FavsContext)

  return (
    <>
      <header>
        <h1>Lista de favoritos</h1>
        <Navbar />
      </header>
      <div className='players-container'>
        {
          favs?.favs.map((character) => (
            <article key={character.id} className='player-card'>
              <picture>
                <img src={character.image} alt={character.name} />
              </picture>
              <h4>{character.name}</h4>
              <div className='pers-info-container'>
                <h5>Especie: </h5>
                <span className='status-zone'>{character.species}</span>
                <h5>Status: </h5>
                <span className='status-zone'>{character.status}</span>
                <h5>Genero: </h5>
                <span>{character.gender}</span>
              </div>
            </article>
          ))
        }
      </div>
    </>
  )
}
