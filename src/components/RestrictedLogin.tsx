import img from '../assets/rick-morty.png'
import { Navbar } from './Navbar'

export function RestrictedLogin () {
  return (
    <>
      <header id='header-login'>
        <Navbar />
      </header>

      <div className='restricted-favs-container'>

        <img src={img} alt='rick-morty-pic' />
        <h4>
          Para poder ver la lista de favoritos debes iniciar sesión primero.
        </h4>

      </div>
    </>
  )
}
