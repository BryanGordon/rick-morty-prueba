import { UserIcon } from '../icons/UserIcon'
import { useState } from 'react'
import { Navbar } from './Navbar'
import { useNavigate } from 'react-router-dom'
import { Error406 } from './Error406'
import { useValidate } from '../hook/useValidate'
import { Signout } from './Signout'

export function Login () {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const { contextLogin } = useValidate()
  const navigate = useNavigate()

  const userPass = '#admin1'
  const passwordPass = '1234567890'

  if (!contextLogin) return <Error406 />

  const handleLog = () => {
    if ((user === userPass) && (password === passwordPass)) {
      contextLogin.setLogged(!contextLogin.logged)
      navigate('/')
    } else {
      alert('El usuario o contraseña no coinciden.')
    }
  }

  if (!contextLogin.logged) {
    return (
      <>
        <header>
          <Navbar />
        </header>

        <section id='login-section'>

          <div className='icon-container'>
            <UserIcon />
          </div>

          <div className='form-container'>
            <form action='submit'>

              <div className='data-section'>
                <label className='input-title'>Ingrese el correo electronico:</label>
                <input onChange={(e) => setUser(e.target.value)} type='email' placeholder='example@gmail.com' className='input-form' />
              </div>

              <div className='data-section'>
                <label className='input-title'>Ingrese la contraseña:</label>
                <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Contraseña' className='input-form' />
              </div>

            </form>
          </div>

          <div className='button-container'>
            <button
              onClick={handleLog}
              className='form-button'
            >
              Ingresar
            </button>
          </div>

        </section>
      </>
    )
  } else return <Signout />
}
