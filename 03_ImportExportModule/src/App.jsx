import './App.css'

// import MyButton from './MyButton'
// import { SqureNumber, Addition } from './MyButton'

// importing button as well as other function in one plac
import MyButton, { SqureNumber as Sqrt, Addition } from './MyButton'

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <MyButton />
      <p>Squre of Number = {Sqrt(5)}</p>
      <p>Addation of Two number= {Addition(5, 6)}</p>
    </div>
  )
}

export default App
