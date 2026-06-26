
import './App.css'
import SlowComponent from './SlowComponent/SlowComponent';
import ButtonWithModal from './Components/ButtonWithModal';
import RefectorComponents from './Components/RefectorComponents';

function App() {

  return (
    <>
      <RefectorComponents>
        <>
          <div>Something Done here | NavBar</div>

          {/* Adding modal here */}
          <ButtonWithModal />
          <br />
          <div>Somethig Done here | Body</div>
          <SlowComponent />
        </>

      </RefectorComponents>
    </>
  );
}

export default App;