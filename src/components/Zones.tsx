import { Navbar } from './Navbar'
import { UseData } from '../hook/useData'

const { getLocations } = UseData()
const data = await getLocations()

export function Zones () {
  return (
    <section>
      <header>
        <h1>Ubicaciones</h1>
        <Navbar />
      </header>

      <div className='zones-container'>
        {
          data.map((location) => (
            <article key={location.id} className='zones-card'>

              <h4>{location.name}</h4>
              <div className='zone-info-container'>

                <h5>Tipo: </h5>
                <span>{location.type}</span>

                <h5>Dimension: </h5>
                <span>{location.dimension}</span>

              </div>

            </article>
          ))
        }

      </div>
    </section>
  )
}
