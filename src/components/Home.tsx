import { Navbar } from './Navbar'
import { UseData } from '../hook/useData'
import { useState } from 'react'
import { type Characters } from '../types/api'

const { getCharacters } = UseData()
const data = await getCharacters()

export function Home () {
  const [user, setUser] = useState<Characters>()
  return (
    <section>
      <header>
        <h1>Personajes</h1>
        <Navbar />
      </header>

      <div className='players-container'>
        {
          data.characters.map((character) => (

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
      {/*<button onClick={() => setCurrentPage(currentPage + 1)}>Cargar mas Personajes</button>*/}

    </section>
  )
}
