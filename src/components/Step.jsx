const Step = ({title, description}) => {
  return <section className="lg:mt-2 flex flex-col gap-2.5 w-[200px] md:w-[310px] h-[165px] md:h-fit">
    <p className=" text-gray-600 font-bold">{title}</p>
    <p className=" text-blue-gray-300 text-sm text-justify tracking-wider	">{description}</p>
  </section>;
};

export default Step;
