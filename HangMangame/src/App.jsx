import { Route, Routes } from 'react-router-dom'
import './App.css'
import StartGame from './pages/StartGame'
import PlayGame from './pages/Playgame'
import HomePage from './pages/HomePage'
import { WordContext } from './components/Context/WordContext'
import { useState } from 'react'




function App() {

  const [wordList, setWordList] = useState([]);
  const [word, setWord] = useState(null);


  return (
    // Context provider 
    <WordContext.Provider value={{
      wordList,setWordList, word,setWord
    }}>

     {/* Define routes for the application */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/start' element={<StartGame />} />
        <Route path='/play' element={<PlayGame />} />
      </Routes>
    </WordContext.Provider>
  )
}

export default App
