import './App.css'

import MyButton from './MyButton'
import { SqureNumber, Addition } from './MyButton'


function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <MyButton />
      <p>Squre of Number = {SqureNumber(5)}</p>
      <p>Addation of Two number= {Addition(5, 6)}</p>
    </div>
  )
}

export default App
