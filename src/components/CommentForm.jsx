import { Textarea } from "@material-tailwind/react";

const CommentForm = ({ id, type, label, placeholder, onChange, className }) => {
 
  let contentToRender;

  if (label === "Message") {
    
    contentToRender = <textarea rows="4"
    id={id}
    type={type}
    placeholder={label}
    onChange={onChange}
    className={`${className}   input placeholder:font-bold font-open`} />;
  } else {
    contentToRender = <input
    id={id}
    type={type}
    placeholder={label}
    onChange={onChange}
    className={`${className} px-2 w-full h-10 rounded-md border-green-300 focus:ring-green-100 input placeholder:font-bold font-open`}
  />;
  }

  return (
    <div className=" py-2 border">
      {/* <label
        htmlFor={id}
        className=" text-blue-gray-900 text-sm font-medium text leading-9 font-open"
      >
        {label}
      </label> */}

      {contentToRender}
      
         
    </div>
  );
};

export default CommentForm;
