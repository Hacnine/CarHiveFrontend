import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

import { useState } from "react";
import React from "react";
import { Faq, Faq_2 } from "../constants/index_two";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      }  transition-transform text-white-green bg-primary-green w-7 h-7 rounded p-2`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  var val = 1;
  var val_2 = 4;

  return (
    <>
      <div className="items-center justify-center flex flex-col  mb-9">
      <p className=" p-2 w-fit text-lg font-bold text-primary-green font-serif text-center bg-gray-200 rounded-md ">
            Do You Have
          </p>
          <h1 className="head_text font-neon text-slate-blue head_text  items-center ">
            Any Questions
          </h1>
      </div>
      <div className="lg:flex lg:justify-between gap-4">
        <div className=" lg:w-1/2">
          {Faq.map((items, index) => (
            <Accordion
              className=""
              open={open === val + index}
              icon={<Icon id={val + index} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(val + index)} className="font-medium text-md">
                {items.questions}
              </AccordionHeader>
              <AccordionBody>{items.ans}</AccordionBody>
            </Accordion>
          ))}
        </div>

        <div className="lg:w-1/2">
          {Faq_2.map((items, index) => (
            <Accordion
              className=""
              open={open === val_2 + index}
              icon={<Icon id={val_2 + index} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(val_2 + index)} className="font-medium text-md">
                {items.questions}
              </AccordionHeader>
              <AccordionBody className="w-[90%] leading-6 ">{items.ans}</AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>

    </>
  );
};

// const FAQ = () => {
//   return (
//     <div className="relative w-[400px] overflow-hidden border h-96">
//       <input
//         type="checkbox"
//         className="absolute  top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"
//       />
//       <div className="w-full pl-5 flex items-center bg-blue-gray-400 h-12">
//         {/* {Faq.map((items, index) => ( */}
//           <div className="  ">
//             <h2 className=" font-neon text-slate-blue ">
//               {/* {items.questions} */}
//               Your Questions
//             </h2>
//           </div>

//           {/* Arrow Icon */}
//           <div className="absolute top-3 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6 text-black"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//               />
//             </svg>
//           </div>

//           <div className="border bg-green-200 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
//             <div className="p-4">
//               <p className="text-black">
//                 {/* {items.ans} */}
//                 My ans is:
//               </p>
//             </div>
//           </div>
//         {/* ))} */}
//       </div>
//     </div>
//   );
// };

export default FAQ;
