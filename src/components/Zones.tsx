import { Star } from '../icons/Star'
import { useContext, useEffect, useRef, useState } from 'react'
import { FavZonesContext } from '../context/FavsZonesContext'
import { type Locations } from '../types/api'
import { UseData } from '../hook/useData'
import { Navbar } from './Navbar'

export function Zones () {
  const context = useContext(FavZonesContext)
  const { getLocations } = UseData()
  const originalZones = useRef<Locations[]>([])
  const [zones, setZones] = useState<Locations[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  if (!context) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  const { favZones, setFavZones } = context

  const handleFav = (fav: Locations) => {
    let favorites = [...favZones]
    favorites.push(fav)
    setFavZones(favorites)
  }

  useEffect(() => {
    getLocations(currentPage)
      .then(
        res => {
          setZones(prevZones => {
            const newZones = prevZones.concat(res)
            originalZones.current = newZones
            return newZones
          })
        }
      )
  }, [currentPage])

  return (
    <section>
      <header>
        <h1>Ubicaciones</h1>
        <Navbar />
      </header>

      <div className='zones-container'>
        {
          zones.map((location) => (
            <article key={location.id} className='zones-card'>

              <h4>
                {location.name}
                <span id='icon-star' onClick={() => handleFav(location)}>
                  <Star />
                </span>
              </h4>
              <div className='zone-info-container'>

                <h5>Tipo: </h5>
                <span>{location.type}</span>

                <h5>Dimensión: </h5>
                <span>{location.dimension}</span>

              </div>

            </article>
          ))
        }

      </div>
      <div className='button-container'>
        <button className='see-more-button' onClick={() => setCurrentPage(currentPage + 1)}>Mostrar más zonas</button>
      </div>
    </section>
  )
}
