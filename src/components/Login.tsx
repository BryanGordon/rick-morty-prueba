export function Login () {
  return (
    <section>
      <div className='icon-container'>
        <img src='' alt='' />
      </div>

      <div className='form-container'>
        <form className='login-input' action='submit'>
          <label className='input-title'>Ingrese el correo electronico</label>
          <input type='email' placeholder='example@gmail.com' className='input-form' />
          <label className='input-title'>Ingrese la contraseña</label>
          <input type='password' placeholder='Contraseña' className='input-form' />
        </form>
      </div>

      <div className='button-container'>
        <button className='form-button'>Ingresar</button>
      </div>
    </section>
  )
}
