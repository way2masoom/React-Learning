// start game component

import Button from "../components/Buttons/Button";

function StartGame() {
    return (
        <>
            <div>
                <Button text="StartGame" styleType="sucess" onClickHandler={() => {
                    console.log("game LOADED");

                }} />
                <p className="m-2 text-blue-400">Click on the button to start the game</p>
            </div>
        </> /* this called react fragment  */
    )
}

export default StartGame;