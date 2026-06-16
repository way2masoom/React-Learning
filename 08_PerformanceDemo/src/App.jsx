
import './App.css'
import SlowComponent from './SlowComponent/SlowComponent';
import ButtonWithModal from './Components/ButtonWithModal';

function App() {


  return (
    <>
    
      <div>Something Done here | NavBar</div>

      {/* Adding modal here */}
      <ButtonWithModal/>
      <div>Somethig Done here | Body</div>
      <SlowComponent />

    </>
  );
}

export default App;