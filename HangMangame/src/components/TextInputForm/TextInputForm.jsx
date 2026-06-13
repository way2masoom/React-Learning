import Button from "../Buttons/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ inputType, handleFormSubmit, handleTextInputChange, handleHintInputChange, handleShowHideClick }) {

    return (
        <form onSubmit={handleFormSubmit}>

            <div>
                <TextInput
                    type={inputType}
                    label="Enter a Phrase or Word"
                    placeholder="Enter a WORD for game"
                    onChangeHandler={handleTextInputChange}
                />
            </div>

            <div>
                <TextInput
                    type="text"
                    label="Enter Hint"
                    placeholder="Enter a Hint"
                    onChangeHandler={handleHintInputChange}
                />
            </div>

            <div>
                <Button
                    text={inputType === "password" ? "Show" : "Hide"}
                    styleType="warning"
                    onClickHandler={handleShowHideClick}
                />
            </div>

            <div>
                <Button
                    text="Submit"
                    type="submit"
                    styleType="primary"
                />
            </div>

        </form>
    );
}

export default TextInputForm;