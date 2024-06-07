import { Navbar } from './Navbar'
import { UseData } from '../hook/useData'
import { Characters, type RickMortyCharacters} from '../types/api'

const { getCharacters } = UseData()
const data = await getCharacters()
console.log('component   ' + data)

export function Home () {
  return (
    <section>
      {
        data.map((ch) => (
          <div key={ch.id}>
            <span style={{ color: 'white' }}>{ch.name}</span>
            <span style={{ color: 'white' }}>{ch.species}</span>
            <span style={{ color: 'white' }}>{ch.status}</span>
            <span style={{ color: 'white' }}>{ch.gender}</span>
          </div>
        ))
      }
      <header>
        <h1>Personajes</h1>
        <Navbar />
      </header>

      <div className='players-container'>
        <article className='player-card'>

          <picture>
            <img src='' alt={data.name} />
          </picture>

          <div className='pers-info-container'>
            <h4>{data.name}</h4>
            <span className='status-zone'>{data.status}</span>
            <h5>{data.species}</h5>
            <h5>{data.gender}</h5>
          </div>

        </article>
      </div>

    </section>
  )
}
