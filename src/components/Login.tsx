import { useState } from 'react'
import { UserIcon } from '../icons/UserIcon'

export function Login () {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const userPass = '#adimin'
  const passwordPass = '1234567890'

  const handleLog = () => {
    if ((user === userPass) && (password === passwordPass)) {
      console.log('Inicio de sesion')
    } else {
      alert('Usuario no coincide')
    }
  }
  return (
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
  )
}
