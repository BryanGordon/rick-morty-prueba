import { Link } from 'react-router-dom'

export function Navbar () {
  return (
    <nav>
      <ul>
        <li>
          <Link className='link' to='/'>Home</Link>
        </li>
        <li>
          <Link className='link' to='/ubicaciones'>Ubicaciones</Link>
        </li>
        <li>
          <Link className='link' to='/login'>Login</Link>
        </li>
        <li>
          <Link className='link' to='/favoritos'>Favoritos</Link>
        </li>
      </ul>
    </nav>
  )
}
