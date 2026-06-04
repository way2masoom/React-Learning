import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>

      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <h1 className='text-center text-5xl text-white'> Bcakground changer</h1>
        <div className='
        fixed flex 
        flex-wrap 
        justify-center
         bottom-12
         inset-x-0 px-2
          bg-white
          w-full
          rounded-md
          '>

          <div className='flex flex-wrap justify-center  gap-5 m-3 '>

            {/* Buttons  */}

            <button className='px-4 py-2 outline-none rounded-md text-white duration-200'
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}>
              Red
            </button>

            <button className='px-4 py-2 outline-none rounded-md text-white duration-200'
              style={{ backgroundColor: "Blue" }}
              onClick={() => setColor("Blue")}>
              Blue
            </button>

            <button className='px-4 py-2 outline-none rounded-md text-white duration-200'
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}>
              green
            </button>

            <button className='px-4 py-2 outline-none rounded-md text-white duration-200'
              style={{ backgroundColor: "pink" }}
              onClick={() => setColor("pink")}>
              pink
            </button>

            <button className='px-4 py-2 outline rounded-md text-black duration-200'
              style={{ backgroundColor: "white" }}
              onClick={() => setColor("white")}>
              white
            </button>

            <button className='px-4 py-2 outline-none rounded-md text-white duration-200'
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}>
              black
            </button>



          </div>

        </div>
      </div>
    </>
  )
}

export default App
