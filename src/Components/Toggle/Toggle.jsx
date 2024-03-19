import { createContext, useState } from "react"
export const ToggleContext = createContext()

export default function Toggle ({children}) {

    const [display, setDisplay] = useState();
    function toggleDisplay(){
        setDisplay(prev => !prev)
    }

    return (
        <ToggleContext.Provider value={{display}} onClick={toggleDisplay} >
            {children}
        </ToggleContext.Provider>

    )
}