import { Navbar } from './Navbar'
import { type Characters, res } from '../types/api'

export function Home () {
  const data: Characters = res
  console.log('component   ' + res)
  return (
    <section>
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
