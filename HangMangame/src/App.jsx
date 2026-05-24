import './App.css'
import Button from './components/Buttons/Button'
import StartGame from './pages/StartGame'
import TextInput from './components/TextInput/TextInput'



function App() {
  return (
    <div>
      <div className="buttons">
        <Button text="click Me" styleType='error' onClickHandler={() => console.log("Clcik me")} />
        <Button text="click Me 2" onClickHandler={() => console.log("Click Me 2")} />
        <Button text="click Me 3" styleType='warning' onClickHandler={() => console.log("Click me 3")} />
        <Button text="click Me 4" styleType='sucess' onClickHandler={() => console.log("Click me 4")} />
      </div>

      <StartGame />
      <TextInput
        lable="Enter some text"
        placeholder="Enter A WORD for GAME"
        onChangeHandler={(e) => {
          console.log(e.target.value);
        }}
      />


    </div>

  )
}

export default App
