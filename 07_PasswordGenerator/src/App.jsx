import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // password generator function
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed])

  // method to copy password to clipbaord
  const passwordCopytoClip = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
     
  },[password])

  // used ref hook
  const passwordRef = useRef(null);

  // useeffect 
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  return (
    <> 
      <div
        className="w-full max-w-md mx-auto my-8 bg-gray-800
      rounded-xl shadow-lg px-4 py-5"
      >
        <h1 className="text-white text-center text-2xl font-bold mb-4">
          Password Generator
        </h1>

        <div className="flex w-full shadow-md overflow-hidden rounded-lg border border-gray-600">
          <input
            className="w-full py-2 px-3 bg-white text-black outline-none"
            type="text"
            placeholder="Password"
            value={password}
            readOnly
            ref={passwordRef}
          />

          <button
            className='outline-none text-white bg-blue-700 px-3 py-05 shrink-0'
            onClick={passwordCopytoClip}
          >
            Copy
          </button>

        </div>
        <div className="flex text-sm gap-x-2">

          <div className="flex items-center gap-x-1 mt-4">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
              className='cursor-pointer'
            />
            <label className='text-white px-2'>Length : {length}</label>

            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="NumberInput"
              onChange={() => { setNumberAllowed((prev) => !prev) }}
            />
            <label className='text-white'>Number</label>

            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="NumberInput"
              onChange={() => { setCharAllowed((prev) => !prev) }}
            /> <label className='text-white'>Character</label>

          </div>
        </div>
      </div>
    </>
  );
}

export default App
