import { AppContext,useGlobalContext } from "../Context";


export default function PrimaryButton ({className,textColor, onOpen, buttonName, icon, padding,shadow, signUpVisible,  scale, url}) {
  
  const {signInBtn, setSignInBtn } = useGlobalContext(AppContext);


  function signIn(){
    // {onOpen? onOpen(): null}

    setSignInBtn(true)
    
  }

  function signUp(){

    setSignInBtn(false)
  }

  const clickHandler = ["Sign In"].includes(buttonName) ? signIn : ["Sign Up"].includes(buttonName) ? signUp:null;


  return (
    <div>
      <a href={url}>
      <button className={` btn_base ${shadow? `${shadow}`: 'shadow-lg shadow-green-800'} tracking-[1px] font-serif ${className} 
      ${textColor ? `${textColor}` : 'text-white'} ${padding ? `${padding}`: `px-4 py-2 text-sm`} ${scale? "":"hover:scale-105 transition-all duration-200 ease-in "}`}
      
      onClick={clickHandler} ><div className="flex items-center justify-center"> <span className="pr-2">{icon}</span> {buttonName}</div></button>
      </a>
    </div>
  )


}
