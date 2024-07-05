import { useValidate } from '../hook/useValidate'
import { Hearth } from '../icons/Hearth'
import { Locations } from '../types/api'

interface Props {
  location: Locations
}

export function FavLocations (locations: Props) {
  const { contextZones } = useValidate()
  const handleDeleteFavLocations = (id: number) => {
    contextZones?.setFavZones(contextZones?.favZones.filter((location) => location.id !== id))
  }

  return (
    <article className='zones-card'>

      <h4>{locations.location.name}</h4>

      <div className='zone-info-container'>

        <h5>Tipo: </h5>
        <span>{locations.location.type}</span>

        <h5>Dimensión: </h5>
        <span>{locations.location.dimension}</span>

        <button className='delete-button' onClick={() => handleDeleteFavLocations(locations.location.id)}>
          Eliminar
          <Hearth />
        </button>

      </div>

    </article>
  )
}
