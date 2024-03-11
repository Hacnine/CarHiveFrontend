
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
    const [totalItem, setTotalItem] = useState(0);
    const rentalLink = '/CarHive/account/rental';

  
    return (
      <AppContext.Provider value={{  signInBtn, setSignInBtn, isDark, setIsDark ,qualityDescription: luxury,setQualityDescription: setLuxury, comfort ,setComfort, prestige ,setPrestige,activeLink, setActiveLink,title, setTitle, totalItem, setTotalItem,rentalLink}}>
        {children}
      </AppContext.Provider>
    );
  }

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};