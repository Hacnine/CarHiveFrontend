
const CustomInput =({id,  type, label, placeholder, onChange, className,  }) => {
    return (
      <>
      <label htmlFor={id} className=" text-blue-gray-900 text-sm font-medium text leading-9 font-open">{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={`${className} border
        bg-white-green 
        text-gray-600 font-medium text-sm
        shadow-lg 
        shadow-green-800/5 ring-4 ring-transparent outline-none placeholder:text-green-300 focus:border-transparent 
        focus:ring-t-green-400 
         transition-all ease-in duration-300  gap-3`}
      />
      </>
    );
  };

export default CustomInput;
