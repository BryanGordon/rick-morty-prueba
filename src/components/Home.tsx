import { Navbar } from './Navbar'
import { UseData } from '../hook/useData'

const { getCharacters } = UseData()
const data = await getCharacters()

export function Home () {
  return (
    <section>
      <header>
        <h1>Personajes</h1>
        <Navbar />
      </header>

      <div className='players-container'>
        {
          data.map((character) => (

            <article key={character.id} className='player-card'>

              <picture>
                <img src={character.image} alt={character.name} />
              </picture>

              <div className='pers-info-container'>
                <h4>{character.name}</h4>
                <span className='status-zone'>{character.status}</span>
                <h5>{character.species}</h5>
                <h5>{character.gender}</h5>
              </div>

            </article>
          ))
        }
      </div>

    </section>
  )
}
