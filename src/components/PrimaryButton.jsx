import { AppContext,useGlobalContext } from "../Context";


export default function PrimaryButton ({className,textColor, onOpen, buttonName, icon, padding,shadow, signUpVisible,  scale, url, rounded}) {
  
  const {signInBtn, setSignInBtn,setQualityDescription, comfort ,setComfort, prestige ,setPrestige} = useGlobalContext(AppContext);


  function signIn(){
    // {onOpen? onOpen(): null}

    setSignInBtn(true)
    
  }

  function signUp(){

    setSignInBtn(false)
  }

  function luxuryBtn(){

    setQualityDescription(true);
    setComfort(false);
    setPrestige(false);
    console.log('Allah')

  }

  function comfortBtn(){

    setComfort(true);
    setQualityDescription(false);
    setPrestige(false);


  }

  function prestigeBtn(){

    setPrestige(true);
    setComfort(false);
    setQualityDescription(false);

  }

  const clickHandler = 
  ["Sign In"].includes(buttonName) ? signIn : 
  ["Sign Up"].includes(buttonName) ? signUp: 
  ["LUXURY"].includes(buttonName) ? luxuryBtn : 
  ["COMFORT"].includes(buttonName) ? comfortBtn:
  ["PRESTIGE"].includes(buttonName) ? prestigeBtn : null;



  return (
    <div>
      <a href={url}>
      <button className={` ${rounded? `${rounded}` : 'rounded font-semibold'} capitalize  items-center justify-center     ${shadow? `${shadow}`: 'shadow-md shadow-green-800'} tracking-[1px] font-serif ${className} 
      ${textColor ? `${textColor}` : 'text-white'} ${padding ? `${padding}`: `px-4 py-2 text-sm`} ${scale? "":"hover:scale-105 transition-all duration-500 ease-in "}`}
      
      onClick={clickHandler} ><div className="flex items-center justify-center"> <span className="pr-2">{icon}</span> {buttonName}</div></button>
      </a>
    </div>
  )


}
