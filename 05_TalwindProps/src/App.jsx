import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 class="text-3xl font-bold bg-green-400">
        Hello world!
      </h1>

      <div className='flex gap-10' >
        <Card userName='People from Nepal' linkText='Visit' />
        <Card userName='Amrican People' linkText='Read more'/>
      </div>

    </>
  )
}

export default App
