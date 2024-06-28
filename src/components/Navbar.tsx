import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'

export function Navbar () {
  const context = useContext(LoginContext)

  let aux = ''

  if (context === undefined) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  const { logged } = context

  logged ? aux = 'Signout' : aux = 'Login'

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
          <NavLink className='link' to='/login'>{aux}</NavLink>
        </li>
        <li>
          <NavLink className='link' to='/favoritos'>Favoritos</NavLink>
        </li>
      </ul>
    </nav>
  )
}
