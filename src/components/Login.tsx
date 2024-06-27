import { UserIcon } from '../icons/UserIcon'
import { useState, useContext } from 'react'
import { LoginContext } from '../context/LoginContext'
import { Navbar } from './Navbar'
import { useNavigate } from 'react-router-dom'

export function Login () {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const context = useContext(LoginContext)
  const navigate = useNavigate()

  const userPass = '#admin1'
  const passwordPass = '1234567890'

  if (context === undefined) {
    return (
      <div>Loading...</div>
    )
  }

  const { logged, setLogged } = context

  const handleLog = () => {
    if ((user === userPass) && (password === passwordPass)) {
      alert('Se ha iniciado sesión.')
      setLogged(!logged)
      navigate('/')
    } else {
      alert('Usuario no coincide')
    }
  }

  if (!logged) {
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
            <button onClick={handleLog} className='form-button'>Ingresar</button>
          </div>
        </section>
      </>
    )
  } else {
    return (
      <>
        <header>
          <Navbar />
        </header>

        <div className='button-container'>
          <button onClick={() => setLogged(!logged)} className='form-button'>Cerrar sesión</button>
        </div>
      </>

    )
  }
}
