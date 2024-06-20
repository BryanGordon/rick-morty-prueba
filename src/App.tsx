import { Home } from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Zones } from './components/Zones'
import { Login } from './components/Login'
import { FavsContextProvider } from './context/FavsContext'
import { Favorites } from './components/Favorites'
import { FavZonesContextProvider } from './context/FavsZonesContext'
import { LoginContextProvider } from './context/LoginContext'

function App () {
  return (
    <main>
      <Router>
        <FavsContextProvider>
          <FavZonesContextProvider>
            <LoginContextProvider>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/ubicaciones' element={<Zones />} />
                <Route path='/favoritos' element={<Favorites />} />
                <Route path='/login' element={<Login />} />
              </Routes>
            </LoginContextProvider>
          </FavZonesContextProvider>
        </FavsContextProvider>
      </Router>
    </main>
  )
}

export default App
