import { Navbar } from './Navbar'

export function Zones () {
  return (
    <section>
      <header>
        <h1>Ubicaciones</h1>
        <Navbar />
      </header>

      <div className='zones-container'>
        <article className='zones-card'>

          <picture>
            <img src='img.com' alt='imagen-de-la-zona' />
          </picture>

          <div className='zone-info-container'>

            <h4>Nombre de la ubicacion</h4>

            <h5>Tipo:</h5>
            <span>Nombre de tipo</span>

            <h5>Dimension</h5>
            <span>Nombre dimension</span>

          </div>

        </article>
      </div>
    </section>
  )
}
