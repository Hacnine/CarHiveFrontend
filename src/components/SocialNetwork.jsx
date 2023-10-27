
const SocialNetwork = ({ newsIcons }) => {
  return (
   

      <div className="flex items-center gap-2">
        {newsIcons.map((items, index) => (
          <div
            className={`w-8 h-8 flex items-center justify-center rounded ${items.bg}`} key={index}
          >
            <items.Icon className="text-white-green px-[2px]" />
          </div>
        ))}
      </div>
  );
};

export default SocialNetwork;
