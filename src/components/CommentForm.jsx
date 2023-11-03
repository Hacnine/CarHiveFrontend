import { Textarea } from "@material-tailwind/react";

const CommentForm = ({ id, type, label, placeholder, onChange, className }) => {
 
  let contentToRender;

  if (label === "Message") {
    
    contentToRender = <textarea rows="4" className={`${className} input`} />;
  } else {
    contentToRender = <input
    id={id}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    className={`${className} input`}
  />;
  }

  return (
    <>
      <label
        htmlFor={id}
        className=" text-blue-gray-900 text-sm font-medium text leading-9 font-open"
      >
        {label}
      </label>

      {contentToRender}
      
         
    </>
  );
};

export default CommentForm;
