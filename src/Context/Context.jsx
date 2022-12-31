import { createContext, useState } from "react";

const Context = createContext()

function Provider ({children}){
    const [id, setId] = useState(0)
    const [item, setItem] = useState([])

    return(
        <Context.Provider value={{id, setId, item, setItem}}>
            {children}
        </Context.Provider>
    )
}

export {
    Context, Provider
}