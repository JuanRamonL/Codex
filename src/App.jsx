import { Route, Routes } from 'react-router-dom'
import Register from './routes/Register.jsx'
import Login from './routes/Login.jsx'
import Home from './routes/Home.jsx'
import Lesson from './routes/Lesson.jsx'
import LessonGame from './routes/LessonGame.jsx'
import Theme from './routes/Theme.jsx'
import ThemeInfo from './routes/ThemeInfo.jsx'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/theme' element={<Theme />} />
        <Route path='/theme-info' element={<ThemeInfo />} />
        <Route path='/lesson' element={<Lesson />} />
        <Route path='/lesson-game' element={<LessonGame />} />
      </Routes>
    </div>
  )
}

export default App