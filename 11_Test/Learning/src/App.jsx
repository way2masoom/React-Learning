import Food from "./Food"
import Fotter from "./Fotter"
import Header from "./Header"
import Card from "./components/Card"
import javaImage from './assets/java.png'


function App() {
  return (
    <>
      <Header />
      <Food />
      <Food />
      <Fotter />
      <h2 style={{ color: "red", textAlign: "center" }} >Part two of learning</h2>

      <div className="cards">
        <Card
          image={javaImage}
          title="Java programming"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dicta!"
        />

        <Card
          image="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
          title="Java Programming"
          description="Learn Java from scratch."
        />

        <Card 
          image="https://weassemble.team/wp-content/uploads/2022/06/Rectangle-33-2.png"
          title="Java programming"
          description="java is a fundamental programming language to learn"
        />

      </div>

    </>
  )
}

export default App
