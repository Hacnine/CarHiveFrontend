const ServiceCard = ({ title, description, Icon }) => {
  return (
   
      <div className="flex-col flex md:items-center md:text-center items-start justify-start text-start gap-3 py-4 hover:cursor-pointer max-w-[350px]">
        <span className="text-white-green hover:scale-110 transition-all duration-300 ease-in bg-primary-green rounded-md w-20 h-20 flex items-center justify-center">
          <Icon className="w-12 h-12 p-1" />
        </span>
        <div className="w-full">
        <h4 className=" font-semibold text-xl text-white">{title}</h4>
        <p className="  text-white-green">{description}</p>
        </div>
      </div>
 
  );
};

export default ServiceCard;
