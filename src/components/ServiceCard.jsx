const ServiceCard = ({ title, description, Icon,className  }) => {
  return (
   
    <div className={`${className? `${className}`:'items-start justify-start text-start'} flex-col flex    gap-3 py-4 hover:cursor-pointer `}>
        <span className="text-white-green hover:scale-110 transition-all duration-300 ease-in bg-primary-green rounded-md w-16 h-16 flex items-center justify-center">
          <Icon className="w-10 h-10 p-1" />
        </span>
        <div className="sm:w-2/3 w-full ">
        <h4 className=" font-semibold text-slate-blue  font-open">{title}</h4>
        <p className="text-gray-500 text-[14px]">{description}</p>
        </div>
      </div>
 
  );
};

export default ServiceCard;
