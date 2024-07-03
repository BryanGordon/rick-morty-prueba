import { Star } from "../icons/Star"
import { Locations } from "../types/api"
import { useValidate } from "../hook/useValidate"
import { Error406 } from "./Error406"

interface Props {
  location: Locations
}

export function ZonesCard (zones: Props) {
  const { contextZones } = useValidate()

  if (!contextZones) return <Error406 />

  const { favZones, setFavZones } = contextZones

  const handleFav = (fav: Locations) => {
    let favorites = [...favZones]
    favorites.push(fav)
    setFavZones(favorites)
  }

  return (
    <article className='zones-card'>
      <h4>
        {zones.location.name}
        <span id='icon-star' onClick={() => handleFav(zones.location)}>
          <Star />
        </span>
      </h4>
      <div className='zone-info-container'>
        <h5>Tipo: </h5>
        <span>{zones.location.type}</span>
        <h5>Dimensión: </h5>
        <span>{zones.location.dimension}</span>
      </div>
    </article>
  )
}
