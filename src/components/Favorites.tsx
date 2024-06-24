import { useContext } from 'react'
import { FavsContext } from '../context/FavsContext'
import { FavZonesContext } from '../context/FavsZonesContext'
import { LoginContext } from '../context/LoginContext'
import { Navbar } from './Navbar'
import { Hearth } from '../icons/Hearth'

export function Favorites () {
  const favsCharacters = useContext(FavsContext)
  const favsZones = useContext(FavZonesContext)
  const context = useContext(LoginContext)

  if (context === undefined) {
    return <div>Loading...</div>
  }

  const { logged } = context

  const handleDeleteFavCharacters = (id: number) => {
    favsCharacters?.setFavs(favsCharacters?.favs.filter((fav) => fav.id !== id))
  }

  const handleDeleteFavLocations = (id: number) => {
    favsZones?.setFavZones(favsZones?.favZones.filter((location) => location.id !== id))
  }

  if (logged) {
    return (
      <>
        <header>
          <h1>Lista de favoritos</h1>
          <Navbar />
        </header>
        <div className='players-container'>
          {
            favsCharacters?.favs.map((character) => (
              <article key={character.id} className='player-card'>

                <picture>
                  <img src={character.image} alt={character.name} />
                </picture>
                <h4>{character.name}</h4>

                <div className='pers-info-container'>
                  <h5>Especie: </h5>
                  <span>{character.species}</span>
                  <h5>Status: </h5>
                  <span className='status-field'>{character.status}</span>
                  <h5>Genero: </h5>
                  <span className='gender-field'>{character.gender}</span>
                  <button className='delete-button' onClick={() => handleDeleteFavCharacters(character.id)}>
                    Eliminar
                    <Hearth />
                  </button>
                </div>

              </article>
            ))
          }
          {
            favsZones?.favZones.map((location) => (
              <article key={location.id} className='zones-card'>

                <h4>{location.name}</h4>
                <div className='zone-info-container'>

                  <h5>Tipo: </h5>
                  <span>{location.type}</span>

                  <h5>Dimensión: </h5>
                  <span>{location.dimension}</span>

                  <button className='delete-button' onClick={() => handleDeleteFavLocations(location.id)}>
                    Eliminar
                    <Hearth />
                  </button>

                </div>

              </article>
            ))
          }
        </div>
      </>
    )
  } else {
    return (
      <div>
        Aún no has iniciado sesión
      </div>
    )
  }
}
