import { NavLink } from 'react-router-dom'

export function Navbar () {
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
          <NavLink className='link' to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink className='link' to='/favoritos'>Favoritos</NavLink>
        </li>
      </ul>
    </nav>
  )
}
