import React, {useState} from "react"
import AppContext from './AppContext'

const ContextProvider = ({children}) => {
    const [state, setState] = useState({
        ///User: ""
        ///Departure: ""
        isLoggedIn: true
    })
    const contextValue = {
        state,
        setState
    }

    return(
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;
