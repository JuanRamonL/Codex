import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './routes/Register.jsx'
import Login from './routes/Login.jsx'
import Home from './routes/Home.jsx'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App