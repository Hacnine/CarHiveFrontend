
export default function PrimaryButton ({className,textColor, onOpen, buttonName, icon, padding,  scale, url}) {
  
  function handleClick(){
    onOpen();
  }

  return (
    <div>
      <a href={url}>
      <button className={`btn_base shadow-lg shadow-green-800 tracking-[1px] font-serif ${className} 
      ${textColor ? `${textColor}` : 'text-white'} ${padding ? `${padding}`: `px-4 py-2 text-sm`} ${scale? "":"hover:scale-110 transition-all duration-200 ease-in "}`}
      
      onClick={handleClick} >{icon}{buttonName}</button>
      </a>
    </div>
  )
}
