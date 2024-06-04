import { Home } from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Zones } from './components/Zones'
import { Login } from './components/Login'

function App () {
  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ubicaciones' element={<Zones />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
