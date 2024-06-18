import { Home } from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Zones } from './components/Zones'
import { Login } from './components/Login'
import { FavsContextProvider } from './context/FavsContext'
import { FavoriteList } from './components/FavoriteList'

function App () {
  return (
    <main>
      <Router>
        <FavsContextProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ubicaciones' element={<Zones />} />
            <Route path='/login' element={<Login />} />
            <Route path='/favoritos' element={<FavoriteList />} />
          </Routes>
        </FavsContextProvider>
      </Router>
    </main>
  )
}

export default App
