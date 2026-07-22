import Food from "./Food"
import Fotter from "./Fotter"
import Header from "./Header"
import CardWithProps from "./components/CardWithProps"
import Card from "./components/Card"
import Button from "./components/Button"
import Student from "./components/Student.Jsx"


function App() {
  return (
    <>
      <Header />
      <Food />
      <Food />
      <Fotter />
      <h2 style={{ color: "red", textAlign: "center" }} >Part two of learning</h2>

      {/* Normal card  */}
      <div className="normalCards">
        <Card />
        <Card />
        <Card />
      </div>

      {/* Cards with props value  */}
      <div className="cards">
        <CardWithProps
          image="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
          title="Java Programming"
          description="Java is a powerful object-oriented programming language used for Android, enterprise applications, and backend development."
        />

        <CardWithProps
          image="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
          title="Python"
          description="Python is a simple and versatile programming language widely used in AI, data science, automation, and web development."
        />

        <CardWithProps
          image="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          title="JavaScript"
          description="JavaScript is the language of the web, used to build interactive websites and modern web applications."
        />

        <CardWithProps
          image="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
          title="C++"
          description="C++ extends C with object-oriented programming and is widely used in game development, competitive programming, and software engineering."
        />

        <CardWithProps
          image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          title="React"
          description="React is a JavaScript library for building fast, reusable, and interactive user interfaces."
        />

      </div>

      <div className="styleInReact">
        {/* How to style react components  
          1. External 
          2. Module
          3. Inline
        */
          <Button
            label="MyButton"
            onClick={() => {
              alert("Button Clicked!");
            }}
          />
        }
      </div>


    </>
  )
}

export default App
