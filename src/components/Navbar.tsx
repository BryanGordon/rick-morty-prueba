import { NavLink } from 'react-router-dom'
import { useValidate } from '../hook/useValidate'
import { Error406 } from './Error406'

export function Navbar () {
  const { contextLogin } = useValidate()

  let state = ''

  if (!contextLogin) return <Error406 />

  contextLogin.logged ? state = 'Signout' : state = 'Login'

  return (
    <nav>
      <ul>
        <li>
          <NavLink className='link' to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink className='link' to='/ubicaciones'>Ubicaciones</NavLink>
        </li>
        <li>
          <NavLink className='link' to='/login'>{state}</NavLink>
        </li>
        <li>
          <NavLink className='link' to='/favoritos'>Favoritos</NavLink>
        </li>
      </ul>
    </nav>
  )
}
