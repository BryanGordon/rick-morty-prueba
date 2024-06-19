import { Home } from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Zones } from './components/Zones'
import { Login } from './components/Login'
import { FavsContextProvider } from './context/FavsContext'
import { Favorites } from './components/Favorites'

function App () {
  return (
    <main>
      <Router>
        <FavsContextProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ubicaciones' element={<Zones />} />
            <Route path='/login' element={<Login />} />
            <Route path='/favoritos' element={<Favorites />} />
          </Routes>
        </FavsContextProvider>
      </Router>
    </main>
  )
}

export default App
