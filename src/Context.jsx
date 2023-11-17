
import React, {useContext, useState} from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
 
    const [signInBtn, setSignInBtn] = useState(true);
    const [isDark, setIsDark] = useState(false);
    const[luxury ,setLuxury] = useState(true);
    const[comfort ,setComfort] = useState(false);
    const[prestige ,setPrestige] = useState(false);
    const [activeLink, setActiveLink] = useState(0);
    const [title, setTitle] = useState('');

  
    return (
      <AppContext.Provider value={{  signInBtn, setSignInBtn, isDark, setIsDark ,qualityDescription: luxury,setQualityDescription: setLuxury, comfort ,setComfort, prestige ,setPrestige,activeLink, setActiveLink,title, setTitle}}>
        {children}
      </AppContext.Provider>
    );
  }

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};