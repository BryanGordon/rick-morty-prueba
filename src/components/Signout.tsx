import { useValidate } from '../hook/useValidate'
import { Error406 } from './Error406'
import { Navbar } from './Navbar'

export function Signout () {
  const { contextLogin } = useValidate()

  if (!contextLogin) return <Error406 />

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className='button-container'>
        <button
          onClick={() => contextLogin.setLogged(!contextLogin.logged)}
          className='form-button'
        >
          Cerrar sesión
        </button>
      </div>
    </>
  )
}
