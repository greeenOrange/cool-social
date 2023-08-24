
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Screens/Home/Home'
import Login from './Partials/Login/Login'
import Register from './Partials/Register/Register'
import RequireAuth from './Partials/RequireAuth/RequireAuth'
import UserProfile from './Screens/UserProfile/UserProfile'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={
            <Home />
            // <RequireAuth>
            //   <Home />
            // </RequireAuth>
          } />
        <Route path="/profile"
          element={
            <RequireAuth>
              <UserProfile />
            </RequireAuth>
          } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
