import { useState } from 'react'
import './App.css'


// Input function
function Input({ type, placeholder }) {
  const [s, setS] = useState('');
  return (
    <div>
      <input type={type} placeholder={placeholder} value={s} onChange={(e) => setS(e.target.value)} />
    </div>
  )
}

function App() {
  const [isStudent, setIsStudent] = useState(false)

  return (
    <>
      <form>
        <Input type='text' placeholder='enter Your name' />
        <br />

        <input type='checkbox'
          id='student'
          name='student'
          value={isStudent}
          onChange={() => setIsStudent(!isStudent)}
        />

        <label htmlFor="student">Are you a student</label>
        <br />

        {/* {isStudent ? <input type='text' placeholder='Enter your School name' /> :
          <input type='text' placeholder='Enter your company name' />
        } */}

        {/* TO SOLVE THIS RECONCILLATION  */}

        {/* {isStudent ? <input type='text' placeholder='Enter your School Name' /> : null}
        {!isStudent ? <input type='text' placeholder='Enter your Company Name' /> : null} */}

        
        {/* Another way to reconcillation   */}
        {isStudent ? <input type='text' placeholder='Enter Your School name' key="school" /> :
          <input type='text' placeholder='Enter Your company name' key="company"/>}

        <br />
        <button type='submit'>Sumit</button>
      </form>
    </>
  )
}

export default App
