import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Articles from './pages/Articles/Articles'
import Contacts from './pages/Contacts/Contacts'
import Reviews from './pages/Reviews/Reviews'
import Work from './pages/Work/Work'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/reviews' element={<Reviews />}/>
          <Route path='/contacts' element={<Contacts />}/>
          <Route path='/articles' element={<Articles />}/>
          <Route path='/work' element={<Work />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
