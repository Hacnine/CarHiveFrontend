const LabelInput = ({ label, placeholder, icon }) => {
  return (
    <div className="w-full  border-black pt-4">
      <label className="font-bold text-sm text-gray-800">{label}</label>

      <div className=" w-[99%] flex items-center justify-between  gap-5 p-2  border border-gray-500 rounded-xl mt-3">
        <input
          type="text"
          placeholder={placeholder}
          className=" placeholder:text-xs w-full h-full bg-white-green outline-none"
        />
        <span className="text-gray-500">{icon}</span>
      </div>
    </div>
  );
};

export default LabelInput;

// const LabelInput = ({ label, placeholder, icon }) => {
//   return (
//     <div className="flex items-center flex-col lg:justify-between  max-w-full lg:w-full pt-4">
//       <div className="w-full ">
//         <label className="font-bold text-sm text-gray-800">{label}</label>

//         <div className=" w-full flex items-center justify-between min-w-max  gap-5 p-2 border  border-gray-400 rounded-xl mt-3">
//           <input
//             type="text"
//             placeholder={placeholder}
//             className=" placeholder:text-sm  outline-none sm:border-none bg-transparent"
//           />
//           <img src={icon} alt="icon" className=" font-bold sm:pl-0 pl-4  " />
//         </div>
//       </div>

//     </div>
//   );
// };

// export default LabelInput;
