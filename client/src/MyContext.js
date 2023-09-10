import React, { useState } from "react";

const MyContext =  React.createContext() 

function MyProvider({children}) {

    const [user, setUser] = useState('jason')
    
    
    return (
        <MyContext.Provider
            value={{user, setUser}}
        >
            {children}                                                                                     
        </MyContext.Provider>
    ) 
}
export { MyProvider, MyContext}








