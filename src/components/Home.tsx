/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { Navbar } from './Navbar'
import { UseData } from '../hook/useData'
import { useEffect, useRef, useState } from 'react'
import { type Characters } from '../types/api'
import { UserIcon } from '../icons/UserIcon'
import { useContext } from 'react'
import { FavsContext } from '../context/FavsContext'

export function Home () {
  const context = useContext(FavsContext)
  const { getCharacters } = UseData()
  const firstCharacters = useRef<Characters[]>([])
  const [character, setCharacters] = useState<Characters[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  if (!context) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  const { favs, setFavs } = context

  const handleFavorites = (fav: Characters) => {
    const aux = [...favs]
    aux.push(fav)
    setFavs(aux)
  }

  useEffect(() => {
    getCharacters(currentPage)
      .then(data => {
        setCharacters(prevCharacters => {
          const newCharacters = prevCharacters.concat(data)
          firstCharacters.current = newCharacters
          return newCharacters
        })
      })
  }, [currentPage])

  return (
    <section>
      <header>
        <h1>Personajes</h1>
        <Navbar />
      </header>

      <div className='players-container'>
        {
          character.map((character) => (
            <article key={character.id} className='player-card'>
              <span onClick={() => handleFavorites(character)}>
                <UserIcon />
              </span>
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
      <button onClick={() => setCurrentPage(currentPage + 1)}>Cargar mas Personajes</button>
    </section>
  )
}
