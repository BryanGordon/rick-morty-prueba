import { Star } from '../icons/Star'
import { useEffect, useRef, useState, useContext } from 'react'
import { FavsContext } from '../context/FavsContext'
import { type Characters } from '../types/api'
import { UseData } from '../hook/useData'
import { Navbar } from './Navbar'

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
              <picture>
                <img src={character.image} alt={character.name} />
              </picture>

              <h4>
                {character.name}
                <span id='icon-star' onClick={() => handleFavorites(character)}>
                  <Star />
                </span>
              </h4>
              <div className='pers-info-container'>
                <h5>Especie: </h5>
                <span>{character.species}</span>
                <h5>Status: </h5>
                <span>{character.status}</span>
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
