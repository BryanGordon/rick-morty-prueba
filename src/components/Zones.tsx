import { useEffect, useRef, useState } from 'react'
import { type Locations } from '../types/api'
import { UseData } from '../hook/useData'
import { Navbar } from './Navbar'
import { ZonesCard } from './ZonesCard'

export function Zones () {
  const { getLocations } = UseData()
  const originalZones = useRef<Locations[]>([])
  const [zones, setZones] = useState<Locations[]>([])
  const [currentPage, setCurrentPage] = useState(1)

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
          zones.map((item) => <ZonesCard location={item} key={item.id} />)
        }
      </div>

      <div className='button-container'>
        <button className='see-more-button' onClick={() => setCurrentPage(currentPage + 1)}>Mostrar más zonas</button>
      </div>

    </section>
  )
}
