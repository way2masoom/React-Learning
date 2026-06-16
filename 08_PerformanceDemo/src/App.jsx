
import { useState } from 'react';
import './App.css'
import SlowComponent from './SlowComponent/SlowComponent';
import Modal from './Modal/Modal';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
      >Open Modal</button>

      <div>Something Done here | NavBar</div>
      {/* Adding modal here */}
      {isOpen &&
        <Modal setIsOpen={setIsOpen} />
      }

      <div>Somethig Done here | Body</div>
      <SlowComponent />

    </>
  );
}

export default App;