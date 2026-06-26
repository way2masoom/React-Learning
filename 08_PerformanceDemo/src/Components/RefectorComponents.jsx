// Refector Components
// suppose we have some state here in app component and it's shwoing the other componentd by rendring it 

import { useState } from "react"

export default function RefectorComponents({ children }) {

    const [x, setX] = useState(0)
    return (
        <>
            < div >
                <button onClick={() => setX(x + 1)}>Increase X </button>
                {<span>X is = {x}</span>}
                {children}
            </div >
        </>
    )
}