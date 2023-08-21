
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Screens/Home/Home'
import Login from './Partials/Login/Login'

function App() {

  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
  )
}

export default App
