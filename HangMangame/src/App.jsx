import './App.css'
import Button from './components/Buttons/Button'



function App() {
  return (
    <div>

      <Button text="click Me" styleType='error' onClickHandler={() => console.log("Clcik me")} />
      <Button text="click Me 2" onClickHandler={() => console.log("Click Me 2")} />
      <Button text="click Me 3" styleType='warning' onClickHandler={() => console.log("Click me 3")} />
      <Button text="click Me 4" styleType='sucess' onClickHandler={() => console.log("Click me 4")} />

    </div>

  )
}

export default App
