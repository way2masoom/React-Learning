import './App.css'
import Button from './components/Buttons/Button'



function App() {
  return (
    <div>
      <Button text="click Me" onClickHandler={() => console.log("Clcik me")} />
      <Button text="click Me 2" onClickHandler={() => console.log("Click Me 2")} />
      <Button text="click Me 3" onClickHandler={() => console.log("Click me 3")} />
    </div>
  )
}

export default App
