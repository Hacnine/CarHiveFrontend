
import React, {useContext, useState} from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
 
    const [signInBtn, setSignInBtn] = useState(true);
  
    return (
      <AppContext.Provider value={{  signInBtn, setSignInBtn }}>
        {children}
      </AppContext.Provider>
    );
  }

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};