import { Route, Routes } from 'react-router-dom'
import './App.css'
import StartGame from './pages/StartGame'
import PlayGame from './pages/Playgame'
import HomePage from './pages/HomePage'




function App() {
  return (
    // Define routes for the application
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/start' element={<StartGame />} />
      <Route path='/play' element={<PlayGame />} />

    </Routes>

  )
}

export default App
