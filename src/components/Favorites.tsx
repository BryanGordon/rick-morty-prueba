import { Navbar } from './Navbar'
import { Error406 } from './Error406'
import { useValidate } from '../hook/useValidate'
import { FavCharacters } from './FavCharacters'
import { FavLocations } from './FavLocations'
import { RestrictedLogin } from './RestrictedLogin'

export function Favorites () {
  const { contextLogin, contextCharacters, contextZones } = useValidate()

  if (!contextLogin) return <Error406 />

  if (contextLogin.logged) {
    return (
      <>
        <header>
          <h1>Lista de favoritos</h1>
          <Navbar />
        </header>

        <div className='players-container'>
          {
            contextCharacters?.favs.map((item) => <FavCharacters character={item} key={item.id} />)
          }

          {
            contextZones?.favZones.map((item) => <FavLocations location={item} key={item.id} />)
          }
        </div>
      </>
    )
  } else return <RestrictedLogin />
}
