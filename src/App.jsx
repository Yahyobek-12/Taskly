import 'animate.css'
import { Routes, Route } from "react-router-dom"
import { Navbar, Home, Footer } from './Constants/Constants'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App