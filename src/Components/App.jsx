
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Screens/Home/Home'
import Login from './Partials/Login/Login'
import Register from './Partials/Register/Register'

function App() {

  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
  )
}

export default App
