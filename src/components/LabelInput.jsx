const LabelInput = ({ label, placeholder, icon }) => {
  return (
    <div className="flex pt-5  items-center flex-col lg:justify-between  w-96   max-w-full lg:w-full">
      <div className="w-full ">
        <label className="font-bold text-gray-800">{label}</label>

        <div className=" w-full flex items-center justify-between min-w-max  gap-5 p-2.5 border  border-gray-400 rounded-xl mt-3">
          <input
            type="text"
            placeholder={placeholder}
            className=" placeholder:text-sm  outline-none sm:border-none placeholder-"
          />
          <img src={icon} alt="icon" className=" font-bold sm:pl-0 pl-4  " />
        </div>
      </div>

      {/* <div className="flex w-full border border-gray-300">

         <input type="text" placeholder={placeholder} className=" border-gray-400  border b focus:ring outline-none focus:ring-primary-green rounded-2xl py-4 w-full"/> */}
      {/* className=" py-4 sm:py-8 pr-9 sm:pr-11 focus:ring focus:ring-primary-green" */}
      {/* <img
            src={icon}
            alt="icon"
            className=" pl-4 top-1/2 -translate-y-1/2"
          /> */}
      {/* </div> */}
    </div>
  );
};

export default LabelInput;
