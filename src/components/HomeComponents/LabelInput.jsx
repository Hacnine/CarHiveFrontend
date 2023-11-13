import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "react-datepicker/dist/react-datepicker.css";

const LabelInput = ({ label, placeholder, Icon, tag, timeList }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [visibility, setVisibility] = useState(false);
  const [displayText, setDisplayText] = useState("Time");
  const handleOptionClick = (option) => {
    setDisplayText(option);
  };
  let Pickers;
  const handleClick = () => {
    console.log("object");
    return <ul className="text-left border rounded"></ul>;
  };
  return (
    <div className="  w-full  border-black pt-4">
      <label className="font-bold text-sm text-slate-blue font-open">
        {label}
      </label>

      {tag !== "Location" && visibility ? (
        <div className="max-h-96 overflow-y-auto absolute z-10  right-0 top-0 bg-white border border-gray-400 p-3 tracking-widest w-24  rounded-lg hover:cursor-pointer ">
          {timeList

            .map((time, index) => (
              <ul className="  text-left border" key={index}>
                <li
                  className=" text-slate-blue font-bold font-open text-md  hover:bg-green-600 text-center divide-y-2 divide-gray-800"
                  onClick={() => (
                    handleOptionClick(time.time), setVisibility(false)
                  )}
                >
                  {time.time}
                </li>
              </ul>
            ))}
        </div>
      ) : null}

      <div className=" w-full h-10 flex items-center justify-between  gap-5 p-2 border border-slate-blue rounded-xl mt-3 overflow-clip font-open">
        {tag !== "Location" ? (
          <DatePicker
            className="placeholder:text-xs text-slate-blue placeholder:font-open w-full h-full bg-transparent border-transparent outline-none"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
          />
        ) : (
          <input
            type="text"
            className=" placeholder:text-xs  placeholder:font-open w-full h-full bg-transparent border-transparent outline-none"
          />
        )}

        <span className={`border-l border-slate-blue ${tag !== 'Location'? 'pl-3': 'pl-14'}  h-16 w-24 flex items-center justify-center`}>
          {tag !== 'Location'? <p className=" font-bold text-slate-blue">{displayText}</p>: <p className=" font-bold text-slate-blue"></p>}
          <Icon
            className="text-slate-blue p-2  w-10 h-14  border-slate-blue hover:cursor-pointer"
            onClick={() => setVisibility(!visibility)}
          />
        </span>

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
