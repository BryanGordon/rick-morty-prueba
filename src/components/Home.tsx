import { Navbar } from './Navbar'

export function Home () {
  return (
    <section>
      <header>
        <h1>Personajes</h1>
        <Navbar />
      </header>

      <div className='players-container'>
        <article className='player-card'>

          <picture>
            <img src='img.com' alt='imagen-personaje' />
          </picture>

          <div className='pers-info-container'>
            <h4>Nombre del personaje</h4>
            <span className='status-zone'>Status</span>
            <h5>Especie</h5>
            <h5>Genero</h5>
          </div>

        </article>
      </div>

    </section>
  )
}
