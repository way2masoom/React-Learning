import { Route, Routes } from 'react-router-dom'
import './App.css'
import StartGame from './pages/StartGame'
import PlayGame from './pages/Playgame'
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer'




function App() {
  return (
    // Define routes for the application
    <Routes>
      <Route path='/' element={<TextInputFormContainer />} />
      <Route path='/start' element={<StartGame />} />
      <Route path='/play' element={<PlayGame />} />

    </Routes>

  )
}

export default App
