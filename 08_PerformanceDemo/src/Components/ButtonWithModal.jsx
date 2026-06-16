// Creating a button with modal

import { useState } from "react"
import Modal from "../Modal/Modal";

export default function ButtonWithModal(){
    const [isOpen, setIsOpen] = useState(false);
   
    return (
        <>
            <button onClick={() => setIsOpen(true)}> Open Modal </button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </>
    );

}