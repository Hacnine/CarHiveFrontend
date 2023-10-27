import React from "react";

const Title = ({ title, border, para, contact, links, textColor }) => {
  return (
    <div className=" ">
      <div>
        <p
          className={`${
            textColor ? `${textColor}` : "text-slate-blue "
          } font-open pb-1 text-lg`}
        >
          {title}
        </p>

        {border ? (
          <div className="border-b-2 border-primary-green w-5 h-[2px] my-2" />
        ) : (
          <></>
        )}
      </div>
      {para ? (
        <p className=" text-sm  font-light leading-5 text-white-green tracking-wide ">
          {" "}
          {para}{" "}
        </p>
      ) : contact ? (
        <div className="space-y-3">
          {contact.map((items, index) => (
            <div className="flex  items-start justify-start" key={index}>
              <items.Icon className="text-primary-green" />
              <p className="pl-3 text-white-green text-sm hover:text-primary-green">{items.info}</p>
            </div>
          ))}
        </div>
      ) : links ? (
        <div className="flex flex-col space-y-3">
          {links.map((items, index) =>(
            <a href={items.href} className="text-white-green text-sm hover:text-primary-green" key={index}>
              {items.link}
            </a>
          ))}
          
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Title;
