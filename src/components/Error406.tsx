import { Navbar } from './Navbar'

export function Error406 () {
  return (
    <section>
      <header id='header-login'>
        <Navbar />
      </header>

      <div className='restricted-favs-container'>
        <img src='https://midu.dev/images/this-is-fine-404.gif' alt='error-dog-picture' />
        <h4>
          Error al cargar los recursos.
        </h4>
      </div>
    </section>
  )
}
