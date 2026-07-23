function List() {
    const fruits = ["Apple", "Banana", "Orange", "PinApple", "Graves", "Coconut"];
    const listItem = fruits.map(fruit => <li>{fruit}</li>)

    const fruits2 = [
        { id: 1, name: "Apple", Calories: 95 },
        { id: 2, name: "Banana", Calories: 45 },
        { id: 3, name: "Orange", Calories: 145 },
        { id: 4, name: "PinApple", Calories: 159 },
        { id: 5, name: "Graves", Calories: 37 }
    ]

    // sorthing the list with Alphabetical
    fruits2.sort((a, b) => a.name.localeCompare(b.name))


    // sorthing the list with Reverse-Alphabetical
    fruits2.sort((a, b) => b.name.localeCompare(a.name))

    // Sorting by the calories Number
    fruits2.sort((a, b) => a.Calories - b.Calories)

    // Sorting by the Reverse calories Number
    fruits2.sort((a, b) => b.Calories - a.Calories)


    const listItem2 = fruits2.map(fruitWithCal => <li key={fruitWithCal.id}>
        {fruitWithCal.name}:  <b>{fruitWithCal.Calories}</b ></li>
    )



    // filtring lowset Calories
    const lowCalFruits = fruits2.filter(fruitsWithLowCal => fruitsWithLowCal.Calories < 100)

    const lowCalFruitsIteam = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
        {lowCalFruit.name} : <b>{lowCalFruit.Calories}</b></li>)


    // filtring High Calories
    const higCalFruits = fruits2.filter(fruitsWithHigCal => fruitsWithHigCal.Calories > 100)

    const HigCalFruitsIteam = higCalFruits.map(higCalFruit => <li key={higCalFruit.id}>
        {higCalFruit.name} : <b>{higCalFruit.Calories}</b></li>)

    return (
        <>
            <div className="react-List">
                <div>
                    <p className="listHeading">List Using Map</p>
                    <ol>{listItem}</ol>
                </div>

                <div>
                    <p className="listHeading">List with Calories</p>
                    <ul>{listItem2}</ul>
                </div>

                <div>
                    <p className="listHeading">Fruits with Low Calories</p>
                    <ol>{lowCalFruitsIteam}</ol>
                </div>

                <div>
                    <p className="listHeading">Fruits with High Calories</p>
                    <ol>{HigCalFruitsIteam}</ol>
                </div>

            </div>
        </>
    )
}

export default List;